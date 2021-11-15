import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert , Modal, Pressable, TextInput} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const energyEfficientData = [
    ['Dishwasher', 'BLACK+DECKER'],
    ['Air Conditioner', 'Trane'],
]
const energyInefficientData = [
    ['Blender', 'Vitamix'],
    ['Ceiling Fan', 'minkaAire']
]

export default class appliancePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Make', 'Action'],
            tableData: [
                ['Fridge', 'Fisher & Paykel', 'Fridge'],
                ['Dishwasher', 'BLACK+DECKER', 'Dishwasher'],
                ['Clothes Dryer', 'Midea', 'Clothes Dryer'],
                ['Clothes Washer', 'Midea', 'Clothes Dryer'],
                ['Ceiling Fan', 'minkaAire', 'Ceiling Fan'],
                ['Air Conditioner', 'Trane', 'Air Conditioner'],
                ['Freezer', 'Frigidaire', 'Freezer'],
                ['Toaster Oven', 'BLACK+DECKER', 'Toaster Oven'],
                ['Microwave', 'Sunbeam', 'Microwave'],
                ['Blender', 'Vitamix', 'Blender'],
            ],
            addVisible : false,
            editVisible : false,
            helpVisible : false,
            energyEfficient : false,
            energyInefficient : false,
            name : "",
            model : "",
            index : -1,
        }
    }

    displayViewEdit(index) {
        this.setState({energyEfficient : false})
        this.setState({energyInefficient : false})
        this.setEditVisible(!this.state.editVisible)
        let entry = this.state.tableData[index];
        this.setState({name : entry[0]});
        this.setState({model : entry[1]});
        this.setState({index : index});
        for(let i = 0; i < energyEfficientData.length; i++)
        {
            if(energyEfficientData[i][0] === entry[0] && energyEfficientData[i][1] === entry[1])
            {
                this.setState({energyEfficient : true});
            }
        }
        for(let i = 0; i < energyInefficientData.length; i++)
        {
            if(energyInefficientData[i][0] === entry[0] && energyInefficientData[i][1] === entry[1])
            {
                this.setState({energyInefficient : true});
            }
        }
    }
    setAddVisible = (visible) => {
        if(visible)
        {
            this.setState({name : ""});
            this.setState({model : ""});
        }
        this.setState({ addVisible: visible });

    }
    setEditVisible = (visible) => {
        this.setState({ editVisible: visible });
    }
    setHelpVisible = (visible) => {
        this.setState({ helpVisible: visible });
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
        const { helpVisible } = this.state;
        const { energyEfficient } = this.state;
        const { energyInefficient } = this.state;

        const element = (data, index) => (
            <TouchableOpacity onPress={() => this.displayViewEdit(index)}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>View/Edit</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Text style = {styles.titleText}>Appliance List</Text>
                <TouchableOpacity style = {styles.helpButton} onPress = {() => this.setHelpVisible(!helpVisible)}>
                    <SimpleLineIcons name={"question"} color={"gray"} size={40} />
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={helpVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setHelpVisible(!helpVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style = {styles.helpTitleText}>Appliance Screen</Text>
                            <Text>On this page you can input each appliance you own by giving them a unique name and inputting their make.  You can then see whether or not your appliance is energy efficient.  To edit or remove an appliance from the table you can press the "View/Edit" button.</Text>
                            <Pressable onPress = {() => this.setHelpVisible(!helpVisible)}>
                                <SimpleLineIcons name={"close"} color={"gray"} size={40} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
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
                            <Text style = {styles.bigText}>Appliance Info</Text>
                            <Text style = {styles.headerText}>Appliance Name</Text>
                            <TextInput
                                style = {styles.textInput}
                                placeholder="Name"
                                placeholderTextColor="gray"
                                onChangeText={(text) =>this.handleName(text)}
                            />
                            <Text style = {styles.headerText}>Appliance Model</Text>
                            <TextInput
                                style = {styles.textInput}
                                placeholder="Model"
                                placeholderTextColor="gray"
                                onChangeText={(text) =>this.handleModel(text)}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.handleConfirm()}
                            >
                                <View style = {{flexDirection: "row"}}>
                                    <Text style={styles.textStyle}>Confirm</Text>
                                    <SimpleLineIcons style = {{marginLeft : 10}}name={"check"} color={"white"} size={20} />
                                </View>

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
                            <TouchableOpacity  style = {styles.closeButton} onPress={() => this.setEditVisible(false)}>
                                <SimpleLineIcons name = {"close"} color = {"gray"} size = {25}/>
                            </TouchableOpacity>
                            <Text style = {styles.bigText}>Appliance Info</Text>
                            <Text style = {styles.headerText}>Appliance Name</Text>
                            <TextInput
                                style = {styles.textInput}
                                placeholder= {this.state.name}
                                placeholderTextColor="gray"
                                onChangeText={(text) =>this.handleName(text)}
                            />
                            <Text style = {styles.headerText}>Appliance Model</Text>
                            <TextInput
                                style = {styles.textInput}
                                placeholder= {this.state.model}
                                placeholderTextColor="gray"
                                onChangeText={(text) =>this.handleModel(text)}
                            />
                            {energyEfficient &&
                            <View style = {{flexDirection : 'row', alignItems : 'center', marginBottom : 10}}>
                                <Text style = {{color : 'green', fontSize : 15}}>This appliance is energy efficient!</Text>
                                <Icon size={24} color={"green"} name={"leaf"} />
                            </View> }
                            {energyInefficient &&
                            <View style = {{flexDirection : 'row', alignItems : 'center', marginBottom : 10}}>
                                <Text style = {{color : 'red', fontSize : 15}}>This appliance is energy inefficient!</Text>
                                <Icon style = {{marginLeft : 5,}} size={24} color={"red"} name={"thumbs-down"} />
                            </View> }

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.handleEdit()}
                            >
                                <View style = {{flexDirection : "row"}}>
                                    <Text style={styles.textStyle}>Confirm Edit</Text>
                                    <SimpleLineIcons style = {{marginLeft : 10}}name={"check"} color={"white"} size={20} />
                                </View>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonRemove]}
                                onPress={() => this.handleRemove()}
                            >
                                <View style = {{flexDirection : "row"}}>
                                    <Text style={styles.textStyle}>Remove</Text>
                                    <SimpleLineIcons style = {{marginLeft : 10}}name={"close"} color={"white"} size={20} />
                                </View>
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
                <View style = {{alignItems : "center"}}>
                    <Pressable
                        style={[styles.buttonAdd, styles.buttonOpen]}
                        onPress={() => this.setAddVisible(true)}
                    >
                        <Text style={styles.textStyleAdd}>Add Appliance</Text>
                    </Pressable>
                </View>

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
    buttonAdd: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        borderColor: '#333',
        borderWidth: 2,
        width : '50%',
    },
    button : {
        marginTop : 10,
        borderRadius: 20,
        padding: 10,
        paddingLeft : 20,
        paddingRight : 20,
        elevation: 2,

    },
    buttonOpen: {
        backgroundColor: "white",
        marginTop : 20,

    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    buttonRemove : {
        backgroundColor : "#f53131",
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontSize : 15,
        fontWeight : "bold"
    },
    textStyleAdd: {
        color: "black",
        textAlign: "center",
        fontSize : 15,
    },
    titleText : {
        fontSize : 50,
        marginBottom : 10,
        color : "#fff",
        fontFamily : "Futura-Medium",
        textAlign : "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    bigText : {
        fontSize : 28,
        marginBottom : 20,
        color : "black",
        fontFamily : "Futura-Medium",
    },
    textInput : {
        fontSize : 18,
        marginBottom : 10,
    },
    headerText : {
        fontSize : 20,
        textDecorationLine: 'underline',
        marginBottom : 5,
    },
    helpButton : {
        height : 40,
        width : 40,
        borderRadius : 100,
        alignItems : "center",
        justifyContent : "center",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom : 559,
        right : 20,
    },
    helpTitleText: {
        fontSize : 30
    },
    closeButton : {
        alignItems : "center",
        justifyContent : "center",
        alignSelf: 'flex-end',
        position: 'absolute',
        right : 15,
        top : 15,
    }
});
