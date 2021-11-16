import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert , Modal, Pressable, TextInput, Dimensions} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const screenWidth = Dimensions.get('window').width;

const energyEfficientData = [
    ['Dishwasher', 'BLACK+DECKER'],
    ['Air Conditioner', 'Trane'],['Refrigerator','Fisher & Paykel'],
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
    ['Refrigerator','Liebherr'],
    ['Refrigerator','MICROFRIDGE WITH SAFE PLUG AND 1ST DEFENSE SMOKE SENSOR'],
    ['Refrigerator','Danby One Plug'],
    ['Refrigerator','EcoMax'],
    ['Refrigerator','MicroChill'],
    ['Refrigerator','Twin Eagles'],
    ['Refrigerator','VIKING'],
    ['Refrigerator','Danby'],
    ['Refrigerator','Miele'],
    ['Refrigerator','Smeg'],
    ['Refrigerator','Midea'],
    ['Refrigerator','Norpole'],
    ['Refrigerator','Whynter'],
    ['Refrigerator','Insignia'],
    ['Refrigerator','ASCOLI'],
    ['Refrigerator','Beko'],
    ['Refrigerator','Blomberg'],
    ['Refrigerator','Arctic Wind'],
    ['Refrigerator','Hisense'],
    ['Refrigerator','Perfect aire'],
    ['Refrigerator','VITARA'],
    ['Refrigerator','Galanz'],
    ['Refrigerator','Beko & Blomberg'],
    ['Refrigerator','CLASSIC'],
    ['Refrigerator','Criterion'],
    ['Refrigerator','Crosley'],
    ['Refrigerator','Summit'],
    ['Refrigerator','Absocold'],
    ['Refrigerator','Conserv'],
    ['Refrigerator','Magic Chef'],
    ['Refrigerator','Marathon'],
    ['Refrigerator','MicroFridge'],
    ['Refrigerator','MicroFridge with Safe Plug and First Defense'],
    ['Refrigerator','CHiQ'],
    ['Refrigerator','GE'],
    ['Refrigerator','Simplicity'],
    ['Refrigerator','Whirlpool'],
    ['Refrigerator','Smad'],
    ['Refrigerator','Conservator'],
    ['Refrigerator','ELLIPSE'],
    ['Refrigerator','ELEMENT'],
    ['Refrigerator','FORTÔøΩ'],
    ['Refrigerator','Geek Chef'],
    ['Refrigerator','Ikea'],
    ['Refrigerator','Kenmore'],
    ['Refrigerator','Hotpoint'],
    ['Refrigerator','Samsung'],
    ['Refrigerator','Caloric'],
    ['Refrigerator','GOLD PREMIUM'],
    ['Refrigerator','INFIGO'],
    ['Refrigerator','MIGALI'],
    ['Refrigerator','Moffat'],
    ['Refrigerator','SANKEY'],
    ['Refrigerator','Ricci'],
    ['Refrigerator','Vissani'],
    ['Refrigerator','WINIA'],
    ['Refrigerator','Amana'],
    ['Refrigerator','Aritic Wind'],
    ['Refrigerator','Fisher & Paykel'],
    ['Refrigerator','Bosch'],
    ['Refrigerator','Gaggenau'],
    ['Refrigerator','Thermador'],
    ['Refrigerator','Dacor'],
    ['Air Conditioner','Danby'],
    ['Air Conditioner','GE'],
    ['Air Conditioner','Frigidaire Gallery'],
    ['Air Conditioner','LG'],
    ['Air Conditioner','Midea'],
    ['Dryer','Asko'],
    ['Dryer','Beko'],
    ['Dryer','Blomberg'],
    ['Dryer','Bosch'],
    ['Dryer','LG'],
    ['Dryer','Miele'],
    ['Dryer','Samsung'],
    ['Dryer','Whirlpool'],
    ['Ventilating Fan','Air King'],
    ['Ventilating Fan','Broan'],
    ['Ventilating Fan','ALDES'],
    ['Ventilating Fan','American ALDES'],
    ['Ventilating Fan','NuTone (Canada)'],
    ['Ventilating Fan','Nutone'],
    ['Ventilating Fan','Delta'],
    ['Ventilating Fan','Greenheck'],
    ['Ventilating Fan','Pennbarry'],
    ['Ventilating Fan','Carrier'],
    ['Ventilating Fan','Dayton'],
    ['Ventilating Fan','Ortech'],
    ['Ventilating Fan','Panasonic'],
    ['Ventilating Fan','Greenheck Fan Corporation'],
    ['Ventilating Fan','Revent'],
    ['Ventilating Fan','Loren Cook Company'],
    ['Ventilating Fan','Utilitech'],
    ['Ventilating Fan','RadonAway'],
    ['Ventilating Fan','S&P'],
    ['Ventilating Fan','QuFresh'],
    ['Ventilating Fan','York'],
    ['Ventilating Fan','Fantech'],
    ['Ventilating Fan','Systemair'],
    ['Ventilating Fan','TerraBloom'],
    ['Ventilating Fan','Hampton Bay'],
    ['Ventilating Fan','Fanstar'],
    ['Ventilating Fan','Aprilaire'],
    ['Ventilating Fan','Softaire'],
    ['Ventilating Fan','HomeAire'],
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
    ['Ceiling Fan','CARRO'],
    ['Ceiling Fan','Kichler Lighting'],
    ['Ceiling Fan','Craftmade'],
    ['Ceiling Fan','Litex'],
    ['Ceiling Fan','Minka Aire'],
    ['Ceiling Fan','"TAISHAN SIGMA ELECTRIC PRODUCTS CO.,LTD"'],
    ['Ceiling Fan','Hampton Bay'],
    ['Ceiling Fan','Progress Lighting'],
    ['Ceiling Fan','RP Lighting & Fans'],
    ['Ceiling Fan','ONE ASTRO'],
    ['Ceiling Fan','ONE HOME COLLECTION'],
    ['Ceiling Fan','ONE PERSONAL COLLECTION'],
    ['Ceiling Fan','ONE PRODUCTS'],
    ['Ceiling Fan','ONE SMART CE GEAR'],
    ['Ceiling Fan','ONETRONIX'],
    ['Ceiling Fan','ONTRONICS'],
    ['Ceiling Fan','PROMOUNTS'],
    ['Ceiling Fan','Fanimation Studio Collection'],
    ['Ceiling Fan','Rejuvenation'],
    ['Ceiling Fan','Greenheck'],
    ['Ceiling Fan','Venco'],
    ['Ceiling Fan','MODERN FORMS'],
    ['Ceiling Fan','WAC Lighting'],
    ['Ceiling Fan','Home Decorators Collection'],
    ['Ceiling Fan','Mente Carlo'],
    ['Ceiling Fan','Monte Carlo'],
    ['Ceiling Fan','WAC Lighting Co.'],
    ['Ceiling Fan','Westinghouse'],
    ['Freezer','Fisher & Paykel'],
    ['Freezer','Avanti'],
    ['Freezer','Beko'],
    ['Freezer','Danby'],
    ['Freezer','LG'],
    ['Freezer','Liebherr'],
    ['Freezer','Sylvania'],
    ['Freezer','RCA'],
    ['Washer','Kenmore'],
    ['Washer','LG'],
    ['Washer','Blomberg'],
    ['Washer','Bosch'],
    ['Washer','Electrolux'],
    ['Washer','Samsung'],
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
    ['Dehumidifier','hOme'],
    ['Dehumidifier','Pohl + Schmitt'],
    ['Dehumidifier','Vremi'],
    ['Dehumidifier','Insignia'],
    ['Dehumidifier','CARRIER CORPORATION'],
    ['Dehumidifier','For living'],
    ['Dehumidifier','Noma'],
    ['Dehumidifier','Toshiba'],
    ['Dehumidifier','GREE'],
    ['Dehumidifier','Hisense'],
    ['Dehumidifier','INNOVATIVE'],
    ['Dehumidifier','Shinco'],
    ['Dehumidifier','"Groundworks, LLC"'],
    ['Dehumidifier','UTOPIAN SYSTEMS'],
    ['Dehumidifier','GENUINE COMFORT'],
    ['Dehumidifier','Seasons'],
    ['Dehumidifier','Coast air'],
    ['Dehumidifier','Comfort Aire'],
    ['Dehumidifier','PELONIS'],
    ['Dehumidifier','Arctic Wind'],
    ['Dehumidifier','Perfect aire'],
    ['Dehumidifier','Aprilaire'],
    ['Dehumidifier','Seaira Global'],
    ['Dehumidifier','Clevast'],
    ['Dehumidifier','Garrison'],
    ['Dehumidifier','Homepointe'],
    ['Dehumidifier','BLACK+DECKER'],
    ['Dehumidifier','Whynter'],
    ['Dehumidifier','Brothers'],
    ['Dehumidifier','TaoTronics'],
    ['Dehumidifier','CHIONE'],
    ['Dehumidifier','DuraComfort'],
    ['Dehumidifier','TCL'],
    ['Dehumidifier','Johnson Controls'],
    ['Dehumidifier','Healthy Climate'],
    ['Dehumidifier','Polar Wind'],
    ['Dehumidifier','DELLA'],
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
    ['Heat pump','Bryant'],
    ['Heat pump','Carrier'],
    ['Heat pump','Climatemaster'],
    ['Heat pump','BOSCH Geo'],
    ['Heat pump','Hydro-Temp Corp.'],
    ['Heat pump','GeoSmart'],
    ['Heat pump','GeoStar'],
    ['Heat pump','York'],
    ['Heat pump','WaterFurnace'],
    ['Heat pump','American Standard'],
    ['Heat pump','Trane']
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
        bottom : screenWidth * 1.73,
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
    },
});
