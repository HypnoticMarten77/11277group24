import {Button, Text, View, StyleSheet, TouchableOpacity, Alert} from "react-native";
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
                ['Fridge', 'Fisher & Paykel', 'Fridge'],
                ['Dishwasher', 'BLACK+DECKER', 'Dishwasher'],
                ['Clothes Dryer', 'Midea', 'Clothes Dryer']
            ]
        }
    }

    _alertIndex(data) {
        Alert.alert(`User has requested to View or Edit ${data}`);
    }

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex(data)}>
              <View style={tableStyles.btn}>
                <Text style={tableStyles.btnText}>View/Edit</Text>
              </View>
            </TouchableOpacity>
          );
        return (
            <View style={tableStyles.container}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
                <Row data={state.HeadTable} style={tableStyles.HeadStyle} textStyle={tableStyles.TableText}/>
                {
                    state.DataTable.map((rowData, index) => (
                        <TableWrapper key={index} style={tableStyles.row}>
                        {
                            rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={tableStyles.TableText}/>
                            ))
                        }
                        </TableWrapper>
                    ))
                }
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
    },
    row: { flexDirection: 'row', backgroundColor: '#FFFFFF' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 , margin: 10},
    btnText: { textAlign: 'center', color: '#fff' }
  });