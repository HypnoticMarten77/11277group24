import {Button, Image, Text, TextInput, View} from "react-native";
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

const whiteStyle = {
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
            index : "",
            val : "",
        };
    }
    handlePrice=(text)=>{
        this.setState({val:text});
    }
    handleMonth=(text)=>{
        this.setState({index:text});
    }
    addNewElement = () =>
    {
        console.log(this.state.val);
        console.log(this.state.index);
        let newArray = [...this.state.chartData]
        newArray.map(entry => {
            if(entry.x === this.state.index)
            {
                entry.y = parseInt(this.state.val);
            }
        })
        this.setState({chartData: newArray});
        console.log(newArray);
    }
    render() {
    return (
        <View style= {styles.container}>
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
                    style={whiteStyle}/>
                <VictoryAxis dependentAxis
                    label="Cost"
                    style={whiteStyle} />
            </VictoryChart>
            <TextInput
                style={styles.TextInputHome}
                placeholder = "Month"
                onChangeText={(text) =>this.handleMonth(text)}
            />
            <TextInput
                style={styles.TextInputHome}
                placeholder = "Price"
                onChangeText={(text) =>this.handlePrice(text)}
            />
            <Button
                title = "Add New Power Bill"
                onPress={() => {this.addNewElement()
                }}
            />
            <Button
                title = "Remove Power Bill"
            />
        </View>

    );
    }
}
