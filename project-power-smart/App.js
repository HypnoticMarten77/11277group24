import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from "./TabRouter"
import loginPage from "./components/LoginPage";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions = {{
                headerShown : false
            }}>
                <Stack.Screen name="Login" component={loginPage} />
                <Stack.Screen name = "Tab" component = {TabNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;