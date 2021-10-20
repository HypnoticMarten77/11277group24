import {Button, Text, View} from "react-native";
import React, { useState } from "react";
import styles from "../AppStyling"

function appliancePage({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.bigText}>Appliance List Screen</Text>
        </View>
    )
}

export default appliancePage;