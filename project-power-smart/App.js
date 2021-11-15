import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from "./TabRouter"
import loginPage from "./components/LoginPage";
import newUserPage from "./components/newUserPage"
import mapPage from "./components/MapPage";
import locationPage from "./components/locationPage";

/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mquinn:<ufl.edu>@cluster0.rnkhx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});*/

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions = {{
                headerShown : false
            }}>
                <Stack.Screen name="Login" component={loginPage} />
                <Stack.Screen name="NewUser" component={newUserPage} />
                <Stack.Screen name = "Tab" component = {TabNav} />
                <Stack.Screen name = "Location" component = {locationPage}/>
                <Stack.Screen name = "Map" component = {mapPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;