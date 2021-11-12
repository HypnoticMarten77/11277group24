import {
    Button,
    Image,
    Text,
    TextInput,
    View,
    Pressable,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";
import styles from "../AppStyling"
import React, { useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import {Dimensions} from "react-native-web";

const INITIAL_STATE_6_MONTH = [
    {x: "Jan", y: 1},
    {x: "Feb", y: 2},
    {x: "Mar", y: 3},
    {x: "Apr", y: 4},
    {x: "May", y: 5},
    {x: "Jun", y: 6},
]
const INITIAL_STATE_1_YEAR = [
    {x: "Jan", y: 1},
    {x: "Feb", y: 2},
    {x: "Mar", y: 3},
    {x: "Apr", y: 4},
    {x: "May", y: 5},
    {x: "Jun", y: 6},
    {x: "Jul", y: 7},
    {x: "Aug", y: 8},
    {x: "Sep", y: 9},
    {x: "Oct", y: 10},
    {x: "Nov", y: 11},
    {x: "Dec", y: 12},
]
const INITIAL_CATEGORIES_6_MONTH = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun"
]
const INITIAL_CATEGORIES_1_YEAR = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const screenHeight = Dimensions.get('window').height - 56;

const grayStyle = {
    axis: { stroke: "gray" },
    axisLabel: { fontSize: 20, padding: 30, fill: "gray" },
    ticks: { stroke: "gray", size: 5, },
    tickLabels: { fontSize: 15, padding: 5, fill: "gray" }
}

export default class homePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData : INITIAL_STATE_6_MONTH,
            category : INITIAL_CATEGORIES_6_MONTH,
            month : "",
            price : "",
            addClicked : false,
            removeClicked : false,
            sixMonth : true,
        };
    }
    handleInput = (text) =>{
        text = text.replace(/ /g, '')
        if(text === "January")
            return "Jan"
        else if(text === "February")
            return "Feb"
        else if(text === "March")
            return "Mar"
        else if(text === "April")
            return "Apr"
        else if(text === "May")
            return "May"
        else if(text === "June")
            return "Jun"
        else
            return text;
    }
    handlePrice=(text)=>{
        this.setState({price:text});
    }
    handleMonth=(text)=>{
        this.setState({month:text});
    }
    handleAddButton = () =>
    {
        this.setState({addClicked : true})
    }
    handleRemoveButton = () =>
    {
        this.setState({removeClicked : true})
    }
    addNewElement = () =>
    {
        let month = this.handleInput(this.state.month);
        this.handleInput(this.state.month);
        let newArray = [...this.state.chartData]

        newArray.map(entry => {
            if(entry.x === month)
            {
                entry.y = parseInt(this.state.price);
            }
        })
        this.setState({chartData: newArray});
        this.setState({addClicked : false})
    }
    removeElement = () =>
    {
        let month = this.handleInput(this.state.month);
        let newArray = [...this.state.chartData]
        newArray.map(entry => {
            if (entry.x === month) {
                entry.y = 0;
            }
        })
        this.setState({chartData: newArray});
        this.setState({removeClicked : false})
    }
    handle1Year = () =>
    {
        let tempArray = [...this.state.chartData]
        let newArray = [...INITIAL_STATE_1_YEAR]
        for(let i = 0; i < tempArray.length; i++)
        {
            newArray[i] = tempArray[i];
        }
        this.setState({chartData: newArray});
        this.setState({category : INITIAL_CATEGORIES_1_YEAR});
        this.state.sixMonth = false;
    }
    handle6Month = () =>
    {
        let tempArray = [...this.state.chartData]
        let newArray = [...INITIAL_STATE_6_MONTH]
        for(let i = 0; i < tempArray.length / 2; i++)
        {
            newArray[i] = tempArray[i];
        }
        this.setState({chartData: newArray});
        this.setState({category : INITIAL_CATEGORIES_6_MONTH});
        this.state.sixMonth = true;

    }
    render() {
        let yearButtonStyle = this.state.sixMonth ? "yearButton" : "yearButtonClicked";

        return (

        <View style= {styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
            <View style = {{
                flex: 1,
                backgroundColor: "#f5df6e",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 150,
            }}>
                <Text style = {styles.charText}>Power Bill Data</Text>
                <VictoryChart domainPadding={25}>
                    <VictoryBar
                        categories={this.state.categories}
                        data={this.state.chartData}
                        style={{
                            data: { fill: "gray", width: 12 }
                        }}
                        animate={{
                            duration: 2000,
                            easing: "bounce",
                            onEnter: {
                                duration: 500,
                                before: () => ({ opacity: 0.3, _y: 0 }),
                                after: (datum) => ({ opacity: 1, _y: datum._y })
                            }
                        }}
                    />
                    <VictoryAxis
                        label="Months"
                        style={grayStyle}/>
                    <VictoryAxis dependentAxis
                                 label="Cost"
                                 style={grayStyle} />
                </VictoryChart>
            </View>

                <View style={{
                    flexDirection: 'row',
                    marginTop : 50,
                    marginBottom : -50}}>
                    <View style= {{flex : 1}}/>
                        <Pressable style = {this.state.sixMonth ? homePageStyles.monthButtonClicked : homePageStyles.monthButton}
                            onPress={() => {
                                this.handle6Month();
                            }}>
                            <Text style = {{fontSize : 12}}>6 Mon</Text>
                        </Pressable>
                        <Pressable style = {this.state.sixMonth ? homePageStyles.yearButton : homePageStyles.yearButtonClicked}
                            onPress={() => {
                                this.handle1Year();
                            }}>
                            <Text style = {{fontSize : 12}}>1 Year</Text>
                        </Pressable>
                    <View style= {{flex : 1}}/>
                </View>

                <View style = {{
                flex : 1,
                alignItems: "center",
                marginTop : 50
            }}>
                {!this.state.removeClicked &&<Pressable style = {this.state.addClicked ? homePageStyles.buttonClicked : homePageStyles.button} onPress={() => {this.handleAddButton()}}>
                    <Text style = {homePageStyles.textButton} > Add New Power Bill </Text>
                </Pressable>}
                {this.state.addClicked && !this.state.removeClicked && <TextInput
                    style={{
                            padding: 10,
                            marginTop: 5,
                            width : 250,
                            textAlign : "center",
                            fontSize : 18
                    }}
                    placeholder = "Enter Month"
                    onChangeText={(text) =>this.handleMonth(text)}
                    clearTextOnFocus = {true}
                />}
                {this.state.addClicked && !this.state.removeClicked && <TextInput
                    style={{
                    padding: 10,
                    marginTop: 5,
                    width : 250,
                    textAlign : "center",
                    fontSize : 18
                }}
                    placeholder = "Enter Price"
                    onChangeText={(text) =>this.handlePrice(text)}
                />}
                {this.state.addClicked && !this.state.removeClicked && <Button title = "Confirm" onPress={() => {this.addNewElement()}}/>}




                {!this.state.addClicked && <Pressable style = {this.state.removeClicked ? homePageStyles.buttonClicked : homePageStyles.button} onPress={() => {this.handleRemoveButton()}}>
                    <Text style = {homePageStyles.textButton} > Remove Power Bill </Text>
                </Pressable>}
                {!this.state.addClicked && this.state.removeClicked && <TextInput
                    style={{
                        padding: 10,
                        marginTop: 5,
                        width : 250,
                        textAlign : "center",
                        fontSize : 18
                    }}
                    placeholder = "Enter Month"
                    onChangeText={(text) =>this.handleMonth(text)}
                    clearTextOnFocus = {true}
                />}
                {!this.state.addClicked && this.state.removeClicked && <Button title = "Confirm" onPress={() => {this.removeElement()}}/>}
            </View>

            </KeyboardAvoidingView>
        </View>

    );
    }
}
const homePageStyles = StyleSheet.create( {
    monthButton : {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
        flex : 1,
        marginRight : 10,
        alignItems: "center",
        justifyContent: "center",
        height : 30,
    },
    monthButtonClicked : {
        backgroundColor: 'lightgray',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
        flex : 1,
        marginRight : 10,
        alignItems: "center",
        justifyContent: "center",
        height : 30,
    },
    yearButton : {
        backgroundColor: 'white',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
        flex : 1,
        marginRight : 10,
        alignItems: "center",
        justifyContent: "center",
        height : 30,
    },
    yearButtonClicked : {
        backgroundColor: 'lightgray',
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 22,
        flex : 1,
        marginRight : 10,
        alignItems: "center",
        justifyContent: "center",
        height : 30,
    },
    button: {
        marginTop : 25,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 2,
        color: 'white',
        fontSize: 24,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },
    buttonClicked: {
        marginTop : 25,
        backgroundColor: "lightgray",
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 2,
        color: 'white',
        fontSize: 24,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },
    textButton: {
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    },
})
