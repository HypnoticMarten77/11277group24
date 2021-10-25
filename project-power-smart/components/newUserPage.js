import {Alert, Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React, { useState } from "react";
import styles from "../AppStyling"


export default class loginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            confirmPassword : "",
        };
    }
    handleEmail=(text)=>{
        this.setState({email:text});
    }
    handlePassword=(text)=>{
        this.setState({password:text});
    }
    handleConfirmPassword=(text)=>{
        this.setState({confirmPassword : text});
    }
    handleLogin = () =>{
        if(this.state.email === "" || this.state.password === "" || this.state.confirmPassword === "")
        {
            Alert.alert(
                "Error",
                "Missing Email or Password",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else if(this.state.email.includes('@') == false || this.state.email.includes('.') == false)
        {
            Alert.alert(
                "Error",
                "Please input a valid email address.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else if(this.state.password.length < 8)
        {
            Alert.alert(
                "Error",
                "Your password must be at least 8 characters in length.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else if(this.state.password !== this.state.confirmPassword)
        {
            Alert.alert(
                "Error",
                "Passwords do not match!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else
        {
            this.props.navigation.navigate('Tab');
        }
    }
    render()
    {
        return (
            <View style={styles.container}>


                <Image style={styles.image} source={require("../assets/lightningbolt3.png")}/>
                <Text style={styles.bigText}> Power Smart</Text>
                <StatusBar style="auto"/>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(text) =>this.handleEmail(text)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(text) =>this.handlePassword(text)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Confirm Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(text) =>this.handleConfirmPassword(text)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginBtn} onPress={() => this.handleLogin()}>
                    <Button
                        title="Login"
                        onPress={() => this.handleLogin()}
                    />
                </TouchableOpacity>

            </View>
        );
    }
}

