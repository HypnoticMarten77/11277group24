import React, {Component} from "react";
import {Alert, Modal, Text, View, Pressable} from "react-native";
import styles from "../StyleSheets/AppStyling"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from "react-native-vector-icons/FontAwesome5";
import mapStyles from "../StyleSheets/mapStyles";
function locationPage({navigation, route}){

    const { located, latitude, longitude } = route.params;
    console.log(located);
    return (
        <View style = {{flex : 1}}>
            <View style = {{flex : 10}}>
                {(located > 1) && <MapView
                    style={{ flex: 10 }}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.01}}
                >
                    <Marker
                        coordinate={{latitude : latitude , longitude :longitude}}
                        pinColor={'red'}
                    />
                </MapView>}
            </View>
            <View style = {{flex : 2, alignItems : "center"}}>
                <Pressable style = {mapStyles.button}onPress={() => navigation.navigate('Home')}>
                    <Text style = {mapStyles.textButton}>Return to Maps Page</Text>
                    <Icon style = {{marginLeft : 8}} size={20} color={"black"} name={"map"}/>
                </Pressable>
            </View>

        </View>
    );
}
export default locationPage;