import {Button, Text, View} from "react-native";
import React, { useState } from "react";
import styles from "../AppStyling"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function mapPage({navigation}){
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });
    return (

        <View style = {{flex : 1}}>
            <MapView
                style={{ flex: 10 }}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421}}
                onRegionChangeComplete={(region) => setRegion(region)}
            />
            <Text style={{flex : 1}}>Current latitude: {region.latitude}</Text>
            <Text style={{flex : 1}}>Current longitude: {region.longitude}</Text>
        </View>
    );
}
export default mapPage;
