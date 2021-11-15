import homePage from "./HomePage";
import dailyTipsPage from "./TipsPage";
import appliancePage from "./AppliancePage";
import mapPage from "./MapPage";
import locationPage from "./locationPage";
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const mapContainer = ({route, navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown : false,
            })}
            initialRouteName="Home"
            style = {{marginTop : 35}}
        >
            <Tab.Screen name="Home" component={mapPage}   options={{headerShown: false}}
            />
            <Tab.Screen name="Location" component={locationPage}    options={{headerShown: false}}
                        initialParams={{ located: 0, latitude : 0.0, longitude : 0.0 }}  />
        </Tab.Navigator>
    );
};

export default mapContainer