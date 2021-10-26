import {Button, Image, Text, TextInput, View, Pressable, TouchableOpacity, Alert, KeyboardAvoidingView} from "react-native";
import styles from "../AppStyling"
import React, { useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import {Dimensions} from "react-native-web";
import dimensions from "react-native-web/dist/exports/Dimensions";

const INITIAL_STATE = [
    {x: "Jan", y: 1},
    {x: "Feb", y: 2},
    {x: "Mar", y: 3},
    {x: "Apr", y: 4},
    {x: "May", y: 5},
    {x: "Jun", y: 6},
]

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
            chartData : INITIAL_STATE,
            month : "",
            price : "",
            addClicked : false,
            removeClicked : false,
        };
    }
    handleInput = (text) =>{
        text = text.replace(/ /g, '')
        if(text == "January")
            return "Jan"
        else if(text == "February")
            return "Feb"
        else if(text == "March")
            return "Mar"
        else if(text == "April")
            return "Apr"
        else if(text == "May")
            return "May"
        else if(text == "June")
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
    render() {
    return (

        <View style= {styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
            <Text style = {styles.charText}>Power Bill Data</Text>
            <VictoryChart domainPadding={25}>
                <VictoryBar
                    categories={{
                        x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
                    }}
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

            {!this.state.removeClicked &&<Pressable style = {this.state.addClicked ? styles.buttonClicked : styles.button} onPress={() => {this.handleAddButton()}}>
                <Text style = {styles.textButton} > Add New Power Bill </Text>
            </Pressable>}
            {this.state.addClicked && !this.state.removeClicked && <TextInput
                style={styles.TextInputHome}
                placeholder = "Enter Month"
                onChangeText={(text) =>this.handleMonth(text)}
                clearTextOnFocus = {true}
            />}
            {this.state.addClicked && !this.state.removeClicked && <TextInput
                style={styles.TextInputHome}
                placeholder = "Enter Price"
                onChangeText={(text) =>this.handlePrice(text)}
            />}
            {this.state.addClicked && !this.state.removeClicked && <Button title = "Confirm" onPress={() => {this.addNewElement()}}/>}




            {!this.state.addClicked && <Pressable style = {this.state.removeClicked ? styles.buttonClicked : styles.button} onPress={() => {this.handleRemoveButton()}}>
                <Text style = {styles.textButton} > Remove Power Bill </Text>
            </Pressable>}
            {!this.state.addClicked && this.state.removeClicked && <TextInput
                style={styles.TextInputHome}
                placeholder = "Enter Month"
                onChangeText={(text) =>this.handleMonth(text)}
                clearTextOnFocus = {true}
            />}
            {!this.state.addClicked && this.state.removeClicked && <Button title = "Confirm" onPress={() => {this.removeElement()}}/>}
            </KeyboardAvoidingView>
        </View>

    );
    }
}
