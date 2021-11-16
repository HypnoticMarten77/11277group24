import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, Alert, Pressable} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalDropdown from 'react-native-modal-dropdown';


const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

const refrigerator = [
    ['Refrigerator','Fisher & Paykel'],
    ['Refrigerator','FURRION'],
    ['Refrigerator','Avanti'],
    ['Refrigerator','COCA COLA'],
    ['Refrigerator','Frigidaire'],
    ['Refrigerator','IGLOO'],
    ['Refrigerator','RCA'],
    ['Refrigerator','Sub-Zero'],
    ['Refrigerator','Goldstar'],
    ['Refrigerator','LG'],
    ['Refrigerator','Frestec'],
    ['Refrigerator','Daewoo'],
    ['Refrigerator','Marvel'],
    ['Refrigerator','Fire Magic'],
    ['Refrigerator','DCS'],
    ['Refrigerator','Lynx'],
    ['Refrigerator','Liebherr']
]

const airConditioner = [
    ['Air Conditioner', 'Trane'],
    ['Air Conditioner','Danby'],
    ['Air Conditioner','GE'],
    ['Air Conditioner','Frigidaire Gallery'],
    ['Air Conditioner','LG'],
    ['Air Conditioner','Midea']
]

const dryer = [
    ['Dryer','Asko'],
    ['Dryer','Beko'],
    ['Dryer','Blomberg'],
    ['Dryer','Bosch'],
    ['Dryer','LG'],
    ['Dryer','Miele'],
    ['Dryer','Samsung'],
    ['Dryer','Whirlpool']
]

const dishwasher = [
    ['Dishwasher','Cove'],
    ['Dishwasher','Asko'],
    ['Dishwasher','Beko'],
    ['Dishwasher','Blomberg'],
    ['Dishwasher','Dacor'],
    ['Dishwasher','FULGOR MILANO'],
    ['Dishwasher','Samsung'],
    ['Dishwasher','Smeg'],
    ['Dishwasher','Summit'],
    ['Dishwasher','Summit Professional'],
    ['Dishwasher','VIKING'],
    ['Dishwasher','Miele'],
    ['Dishwasher', 'BLACK+DECKER']
]

const dehumidifier = [
    ['Dehumidifier','DELLA'],
    ['Dehumidifier','Danby'],
    ['Dehumidifier','Dayton'],
    ['Dehumidifier','Frigidaire'],
    ['Dehumidifier','Koolking'],
    ['Dehumidifier','Midea'],
    ['Dehumidifier','Keystone'],
    ['Dehumidifier','ABESTORM'],
    ['Dehumidifier','ALORAIR'],
    ['Dehumidifier','baseair'],
    ['Dehumidifier','BASEAIRE DAY YOUR CRAWL SPACE & BASEMENT'],
    ['Dehumidifier','amazonbasics'],
    ['Dehumidifier','hOme']
]

const ventilating = [
    ['Ventilating Fan','Air King'],
    ['Ventilating Fan','Broan'],
    ['Ventilating Fan','ALDES'],
    ['Ventilating Fan','American ALDES'],
    ['Ventilating Fan','NuTone (Canada)'],
    ['Ventilating Fan','Nutone'],
    ['Ventilating Fan','Delta'],
    ['Ventilating Fan','Greenheck'],
    ['Ventilating Fan','Pennbarry'],
    ['Ventilating Fan','Carrier']
]

const ceiling = [
    ['Ceiling Fan','CE'],
    ['Ceiling Fan','CEME'],
    ['Ceiling Fan','SMAFAN'],
    ['Ceiling Fan','smair'],
    ['Ceiling Fan','Trifecte'],
    ['Ceiling Fan','Davis Lighting'],
    ['Ceiling Fan','Biltmore Lighting'],
    ['Ceiling Fan','Fanimation'],
    ['Ceiling Fan','AERATRON'],
    ['Ceiling Fan','Concord Fans'],
    ['Ceiling Fan','Emerson'],
    ['Ceiling Fan','Big Ass Fans'],
    ['Ceiling Fan','CARRO']
]

const freezer = [
    ['Freezer','Fisher & Paykel'],
    ['Freezer','Avanti'],
    ['Freezer','Beko'],
    ['Freezer','Danby'],
    ['Freezer','LG'],
    ['Freezer','Liebherr'],
    ['Freezer','Sylvania'],
    ['Freezer','RCA'],
]

const washer = [
    ['Washer','Kenmore'],
    ['Washer','LG'],
    ['Washer','Blomberg'],
    ['Washer','Bosch'],
    ['Washer','Electrolux'],
    ['Washer','Samsung'],
]

const heat = [
    ['Heat pump','Bryant'],
    ['Heat pump','Carrier'],
    ['Heat pump','Climatemaster'],
    ['Heat pump','BOSCH Geo'],
    ['Heat pump','Hydro-Temp Corp.'],
    ['Heat pump','GeoSmart'],
    ['Heat pump','GeoStar'],
    ['Heat pump','York'],
    ['Heat pump','WaterFurnace']
]

export default class efficientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Name', 'Make'],
            tableData: [
                ['Washer','Kenmore'],
                ['Washer','LG'],
                ['Washer','Blomberg'],
                ['Washer','Bosch'],
                ['Washer','Electrolux'],
                ['Washer','Samsung'],
            ],
            name : "",
            model : "",
            index : -1,
            isGeneral: true,
            category: 0,
            helpVisible : false,
        }
    }
    setHelpVisible = (visible) => {
        this.setState({ helpVisible: visible });
    }
    handleSelect = (text) =>
    { 
        let x = parseInt(text);
        this.setState({isGeneral : false});
        if(x === 0)
        {
            this.setState({tableData : airConditioner})
            this.setState({catagory : 0})
            this.setState({isGeneral : true});
        }
        if(x === 1)
        {
            this.setState({tableData : ceiling})
            if (!(this.state.isGeneral))
                this.setState({catagory : 1})
        }
        if(x === 2)
        {
            this.setState({tableData : dehumidifier})
            if (!(this.state.isGeneral))
                this.setState({catagory : 2})
        }
        if(x === 3)
        {
            this.setState({tableData : dishwasher})
            if (!(this.state.isGeneral))
                this.setState({catagory : 3})
        }
        if(x === 4)
        {
            this.setState({tableData : dryer})
            if (!(this.state.isGeneral))
                this.setState({catagory : 4})
        }
        if(x === 5)
        {
            this.setState({tableData : freezer})
            if (!(this.state.isGeneral))
                this.setState({catagory : 5})
        }
        if(x === 6)
        {
            this.setState({tableData : heat})
            if (!(this.state.isGeneral))
                this.setState({catagory : 6})
        }
        if(x === 7)
        {
            this.setState({tableData : refrigerator})
            if (!(this.state.isGeneral))
                this.setState({catagory : 7})
        }if(x === 8)
        {
            this.setState({tableData : ventilating})
            if (!(this.state.isGeneral))
                this.setState({catagory : 8})
        }
        if(x === 9)
        {
            this.setState({tableData : washer})
            if (!(this.state.isGeneral))
                this.setState({catagory : 9})
        }
    }



    render(){
        const { helpVisible } = this.state;

        return (
            <View style={styles.container}>
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
                            <Text style = {styles.helpTitleText}>Efficient Products Screen</Text>
                            <Text>On this page you can input each appliance you own by giving them a unique name and inputting their make.  You can then see whether or not your appliance is energy efficient.  To edit or remove an appliance from the table you can press the "View/Edit" button.</Text>
                            <Pressable onPress = {() => this.setHelpVisible(!helpVisible)}>
                                <SimpleLineIcons name={"close"} color={"gray"} size={40} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style = {styles.titleText}>Suggested Efficient Products</Text>
                <Text style = {styles.dropDownTextDefaultVal}>Select A Category</Text>
                <View style = {{alignItems : 'center', marginBottom : 10,}}>
                    <ModalDropdown options={['Air Conditioner', 'Ceiling Fan', 'Dehumidifier', 'Dishwasher','Dryer', 'Freezer', 'Heat pump','Refrigerator', 'Ventilating Fan', 'Washer']}
                                   defaultValue = "Washer"
                                   animated = {true}
                                   textStyle = {styles.dropDownTextDefaultVal}
                                   dropdownTextStyle = {styles.dropDownText}
                                   onSelect = {(text) =>this.handleSelect(text)}>
                    </ModalDropdown>
                </View>


                <ScrollView style = {{height : screenHeight / 3, marginBottom : 100}}
                          >
                    <Table borderStyle={{borderColor: 'transparent'}}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                        {
                            this.state.tableData.map((rowData, index) => (
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
                </ScrollView>
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
    titleText : {
        marginTop : 100,
        fontSize : 50,
        marginBottom : 10,
        color : "#fff",
        fontFamily : "Futura-Medium",
        textAlign : "center",
    },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    dropDownTextDefaultVal : {
        fontSize : 20,
        color : "gray",
        textAlign : "center",

    },
    dropDownText : {
        fontSize : 15,
        width : 150,
        textAlign : "center",
    },
    helpButton : {
        height : 40,
        width : 40,
        borderRadius : 100,
        alignItems : "center",
        justifyContent : "center",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom : screenWidth * 1.73,
        right : 20,
    },
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
    },
    helpTitleText: {
        fontSize : 30,
        textAlign : 'center'
    },
});