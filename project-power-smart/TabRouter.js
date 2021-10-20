import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import appliancePage from "./components/AppliancePage";
import homePage from "./components/HomePage";
import dailyTipsPage from "./components/TipsPage";
import mapPage from "./components/MapPage";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TabNav = ({route, navigation}) => {
    return (
        <Tab.Navigator
           screenOptions = {{headerShown : false}}
           initialRouteName="Home"

        >
            <Tab.Screen name="Tips" component={dailyTipsPage} />
            <Tab.Screen name="Home" component={homePage} />
            <Tab.Screen name="Appliances" component={appliancePage} />
            <Tab.Screen name="Map" component={mapPage} />
        </Tab.Navigator>
    );
}

export default TabNav;