import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert , Modal, Pressable, TextInput} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default class appliancePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Make', 'Action'],
            tableData: [
                ['Fridge', 'Fisher & Paykel', 'Fridge'],
                ['Dishwasher', 'BLACK+DECKER', 'Dishwasher'],
                ['Clothes Dryer', 'Midea', 'Clothes Dryer']
            ],
            addVisible : false,
            editVisible : false,
            name : "",
            model : "",
            index : -1,
        }
    }

    displayViewEdit(index) {
        this.setEditVisible(!this.state.editVisible)
        let entry = this.state.tableData[index];
        this.setState({name : entry[0]});
        this.setState({model : entry[1]});
        this.setState({index : index});
    }
    setAddVisible = (visible) => {
        this.setState({ addVisible: visible });
    }
    setEditVisible = (visible) => {
        this.setState({ editVisible: visible });
    }
    handleModel = (input) => {
        this.setState({model:input});
    }
    handleName = (input) => {
        this.setState({name : input});
    }
    handleConfirm = () => {
        this.setAddVisible(!this.state.addVisible)
        let newArray = [...this.state.tableData];
        let name = this.state.name;
        let model = this.state.model;
        newArray.push([name, model, name]);
        if(name !== "" && model !== "")
        {
            this.setState({tableData: newArray});
        }
    }
    handleEdit = () => {
        this.setEditVisible(!this.state.editVisible)
        let newArray = [...this.state.tableData];
        newArray[this.state.index][0] = this.state.name;
        newArray[this.state.index][1] = this.state.model;
        newArray[this.state.index][2] = this.state.name;
        this.setState({tableData : newArray});
    }
    handleRemove = () => {
        this.setEditVisible(!this.state.editVisible)
        let newArray = [...this.state.tableData];
        newArray.splice(this.state.index, 1);
        this.setState({tableData : newArray});
    }
    render() {
        const state = this.state;
        const { addVisible } = this.state;
        const { editVisible } = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this.displayViewEdit(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>View/Edit</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setAddVisible(!addVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Appliance Info</Text>
                            <TextInput
                                placeholder="Name"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) =>this.handleName(text)}
                            />
                            <TextInput
                                placeholder="Model"
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) =>this.handleModel(text)}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.handleConfirm()}
                            >
                                <Text style={styles.textStyle}>Confirm</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setEditVisible(!editVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Appliance Info</Text>
                            <TextInput
                                placeholder= {this.state.name}
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) =>this.handleName(text)}
                            />
                            <TextInput
                                placeholder= {this.state.model}
                                placeholderTextColor="#003f5c"
                                onChangeText={(text) =>this.handleModel(text)}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.handleEdit()}
                            >
                                <Text style={styles.textStyle}>Confirm Edit</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.handleRemove()}
                            >
                                <Text style={styles.textStyle}>Remove</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Table borderStyle={{borderColor: 'transparent'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    {
                        state.tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setAddVisible(true)}
                >
                    <Text style={styles.textStyle}>Add Appliance</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#f5df6e',
        justifyContent : "center",
    },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
