import {Button, Text, View} from "react-native";
import React, { useState } from "react";
import styles from "../AppStyling"

function mapPage({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.bigText}>Map Screen</Text>
        </View>
    )
}
export default mapPage;