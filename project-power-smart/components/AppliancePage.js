import {Button, Text, View, StyleSheet} from "react-native";
import React, { useState, Component } from "react";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import styles from "../AppStyling"

var Appliances = [];

export default class appliancePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HeadTable: ['Name', 'Make', 'Action'],
            DataTable: [
                ['Fridge', 'Fisher & Paykel', 'buttons'],
                ['Dishwasher', 'BLACK+DECKER', 'buttons'],
                ['Clothes Dryer', 'Midea', 'buttons']
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={tableStyles.container}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                    <Row data={state.HeadTable} style={tableStyles.HeadStyle} textStyle={tableStyles.TableText}/>
                    <Rows data={state.DataTable} style={{backgroundColor: '#ffffff'}} textStyle={tableStyles.TableText}/>
                </Table>
            </View>
        )
    }
}

const tableStyles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#f5df6e'
    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
      backgroundColor: '#ffe0f0'
    },
    TableText: { 
      margin: 10
    }
  });