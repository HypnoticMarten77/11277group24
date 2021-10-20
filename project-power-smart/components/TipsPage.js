import {Button, Text, View} from "react-native";
import React, { useState } from "react";
import styles from "../AppStyling"

function dailyTipsPage({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.bigText}>Daily Tips Screen</Text>
        </View>
    )
}

export default dailyTipsPage;