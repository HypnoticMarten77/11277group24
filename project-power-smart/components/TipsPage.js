import {
    Button,
    Text,
    View,
    Image,
    Picker,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Alert,
    Pressable, Modal
} from "react-native";
import React, { useState } from "react";
import styles from "../StyleSheets/AppStyling"
import ModalDropdown from 'react-native-modal-dropdown';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const screenWidth = Dimensions.get('window').width;

const applianceTips = [
    {header: "Wash laundry cold", description: "By switching from hot to cold water for an average of three loads per week, " +
            "you could save up to $22 per year on your energy bill."},
    {header : "Run full loads", description : "Cut one load of wash per week, even if you're already using" +
            " cold water only, and you could save $18 a year on your laundry costs."},
    {header : "Hang dry your laundry", description: "If you do eight loads of laundry a week and use your clothesline" +
            " for 50% of those clothes, you could save $65 a year."},
    {header : "Be efficient with refrigeration", description: "Maintain clean, air-tight refrigerator door seals to keep the cold" +
            "air in and warm air out."},
    {header : "Unplug your second fridge", description: "Unplug that second fridge and save up to $55 a year. Freeze plastic jugs" +
            " of water and use them in a cooler when you need them."},
    {header : "Skip the heat-dry for dishwasher", description: "That heat-dry setting is expensive. " +
            "De-select it and, based on one load of dishes a day, save up to $27 for the year."},
    {header : "Use microwave, crockpot or toaster oven", description: "A microwave takes 15 minutes to do the same job as 1 hour " +
            "in an oven. Use a microwave instead of your oven 4 times a week and save $13/year."},
]

const electronicsTips = [
    {header: "Unplug unused electronics", description: "Standby power can account for 10% of an average household's annual " +
            "electricity use. Unplug unused electronics and save $50 a year."},
    {header : "Recycle or donate that old TV", description : " Recycle or donate your old T.V.. Even if you're" +
            " just using it an hour a day, that 42-inch LCD is costing you six bucks a year."},
    {header : "Save the Game Console for Gaming", description : "If you stream content to your TV, use a dedicated set-top box, smart TV " +
            "or streaming-capable Blu-ray " +
            "player. Game consoles use far more energy than these alternatives."},
    {header : "Buy Energy-Efficient Appliances", description : "Look for the Energy Star label when you're shopping for home items." +
            " More than 40 product categories feature the label, including major appliances and light fixtures."},

]

const lightBulbTips = [
    {header : "Turn off unnecessary lights", description : "Two 100-watt incandescent bulbs switched off an extra two hours per " +
            "day could save you $15 over a year. Better yet, switch to LED."},
    {header : "Use natural light", description : "A single south-facing window can illuminate 20 to 100 times its area. " +
            "Turning off one 60-watt bulb for four hours a day is a $9 saving over a year."},
    {header : "Use task lighting", description : "Turn off ceiling lights and use table lamps, track lighting and under-counter" +
            " lights in work and hobby areas as well as in kitchens."},
    {header : "Use Outdoor CFLs", description : "Because compact fluorescent lamps (CFLs) are rated differently than incandescent light bulbs, " +
            "divide the wattage of the incandescent bulb by four to determine the CFL wattage you should use."},
    {header : "Install Skylights", description : "Use daylight whenever possible. Install skylights in rooms with no windows. " +
            "During the day, you might not need to turn on a light."},
    {header : "Make the most of exterior lighting", description: "Don't forget your home's exterior lighting when considering how to conserve energy. " +
            "Motion sensors save energy, and you get affordable security that never rests."},
]

const heatingTips = [
    {header : "Manage your thermostat", description : "If you have electric heat, lower your thermostat" +
            " by two degrees to save 5% on your heating bill. Lowering it five degrees could save 10%."},
    {header : "Fix that leaky faucet", description : "Fixing a hot water leak in your faucet can save up to $9 per year in energy costs."},
    {header : "Take shorter showers", description : "Hot water is expensive. If two people in your home cut their shower time by a minute each, " +
            "you could save $30 over a year."},
    {header : "Match pans to burners", description : "A 6-inch pot on an 8-inch stove burner wastes more than 40 percent of the burner's heat."},
    {header : "Take shorter baths", description: "A seven-minute shower with a 2.5-gallon-per-minute showerhead uses less water -- and heat -- than a full bath."},
    {header : "Tighten your ductwork", description: "Remove any duct tape from your air-duct joints and seal them instead with duct mastic (a water-base acrylic sealer)."},


]

const airConditioningTips = [
    {header : "Not home? Turn off the air conditioner", description : "Turn off that old window unit air conditioner " +
            "for five hours a day while you're away. Do that for 60 days over a summer and you'll save $16."},
    {header : "Be strategic with window coverings", description : "Promote airflow through your home and block the afternoon sun." +
            "You could save you up to $10 (2 fans) or $45 (1 window unit AC) during the summer."},
    {header : "Seal ducts", description : "Air loss through ducts can lead to high electricity costs, accounting for nearly 30 percent " +
            "of a cooling system’s energy consumption. Sealing and insulating ducts can go a long way toward" +
            " lowering your electricity bills."},
    {header : "Use ceiling fans", description : "Cooling your home with ceiling fans will allow you to raise your thermostat " +
            "four degrees. This can help lower your electricity bills without sacrificing overall comfort."},
    {header : "Open windows", description : "Opening windows creates a cross-wise breeze, allowing you to naturally cool your " +
            "home without switching on air conditioners. This is an ideal tactic in spring when temperatures are mild."},
    {header : "Service your air conditioner", description : "Easy maintenance such as routinely replacing or cleaning air filters can lower your cooling system’s" +
            " energy consumption by up to 15 percent."},

]
class dailyTipsPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title : "Turn off unnecessary lights",
            description : "Two 100-watt incandescent bulbs switched off an extra two hours per " +
                "day could save you $15 over a year. Better yet, switch to LED.",
            catagory : 0,
            helpVisible : false,
            isGeneral : true,
        };
    }
    handleSelect = (text) =>
    { /*0 : General,
        1 : Appliance,
        2 : Electronics,
        3 : Light Bulbs,
        4 : Heating,
        5 : Air Conditioning
    */
        let index = 0;
        let x = parseInt(text);
        this.setState({isGeneral : false});
        if(x === 0)
        {
            this.setState({catagory : 0})
            this.setState({isGeneral : true});
            x = ~~(Math.random() * 5) + 1;
        }
        if(x === 1)
        {
            let index = ~~(Math.random() * applianceTips.length);
            this.setState({title : applianceTips[index].header});
            this.setState({description : applianceTips[index].description})
            if (!(this.state.isGeneral))
                this.setState({catagory : 1})
        }
        if(x === 2)
        {
            let index = ~~(Math.random() * electronicsTips.length);
            this.setState({title : electronicsTips[index].header});
            this.setState({description : electronicsTips[index].description})
            if (!(this.state.isGeneral))
                this.setState({catagory : 2})
        }
        if(x === 3)
        {
            let index = ~~(Math.random() * lightBulbTips.length);
            this.setState({title : lightBulbTips[index].header});
            this.setState({description : lightBulbTips[index].description})
            if (!(this.state.isGeneral))
                this.setState({catagory : 3})
        }
        if(x === 4)
        {
            let index = ~~(Math.random() * heatingTips.length);
            this.setState({title : heatingTips[index].header});
            this.setState({description : heatingTips[index].description})
            if (!(this.state.isGeneral))
                this.setState({catagory : 4})
        }
        if(x === 5)
        {
            let index = ~~(Math.random() * airConditioningTips.length);
            this.setState({title : airConditioningTips[index].header});
            this.setState({description : airConditioningTips[index].description})
            if (!(this.state.isGeneral))
                this.setState({catagory : 5})
        }
    }
    setHelpVisible = (visible) =>
    {
        this.setState({helpVisible : visible});
    }
    render() {
        const { helpVisible } = this.state;
        return (
            <View style = {styles.container}>
                <TouchableOpacity style = {stylesTips.helpButton} onPress = {() => this.setHelpVisible(!helpVisible)}>
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
                    <View style={stylesTips.centeredView}>
                        <View style={stylesTips.modalView}>
                            <Text style = {stylesTips.helpTitleText}>Tips Screen</Text>
                            <Text>On this screen you can view tips on saving energy that you can use day by day.  General allows you to view any tips, while other categories allow for you to view tips for specific areas.</Text>
                            <Pressable onPress = {() => this.setHelpVisible(!helpVisible)}>
                                <SimpleLineIcons name={"close"} color={"gray"} size={40} />
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Image style={stylesTips.image} source={require("../assets/lightbulb.png")}/>
                <Text style = {stylesTips.bigText}>Daily Tip</Text>
                <Text style = {stylesTips.titleText}>{this.state.title}</Text>
                <Text style = {stylesTips.descriptionText}>{this.state.description}</Text>
                <Text style = {stylesTips.text}>Category</Text>
                <ModalDropdown options={['General', 'Appliances', 'Electronics', 'Light Bulbs','Heating', 'Air Conditioning']}
                defaultValue = "General"
                animated = {true}
                textStyle = {stylesTips.dropDownTextDefaultVal}
                dropdownTextStyle = {stylesTips.dropDownText}
                onSelect = {(text) =>this.handleSelect(text)}>
                </ModalDropdown>
                <TouchableOpacity onPress={()=>{this.handleSelect(this.state.catagory)}}>
                    <Image style = {stylesTips.refreshImage} source={require("../assets/Refresh_icon.png")}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const stylesTips = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5df6e",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginTop : 50,
        marginBottom : 10,
        width : 200,
        height: 200,
        resizeMode: "contain"
    },
    bigText : {
        fontSize : 50,
        marginBottom : 20,
        color : "#fff",
        fontFamily : "Futura-Medium",
    },
    text : {
        fontSize : 25,
        color : "#fff",
        fontFamily : "Futura-Medium",
    },
    dropDownTextDefaultVal : {
        fontSize : 20,
        color : "gray"
    },
    dropDownText : {
        fontSize : 15,
        width : 150,
    },
    titleText : {
        height : 30,
        fontSize : 23,
        marginBottom : 10,
        color : "#202c4a",

    },
    descriptionText : {
        fontSize : 15,
        height : 120,
        width : screenWidth - 40,
        textAlign : "center",
        color : "#202c4a",
    },
    refreshImage : {
        marginTop : 10,
        height : 60,
        width : 60,
    },
    helpButton : {
        height : 40,
        width : 40,
        borderRadius : 100,
        alignItems : "center",
        justifyContent : "center",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom : screenWidth*1.73,
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
        fontSize : 30
    },
});

export default dailyTipsPage;