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
        };
    }
    handleEmail=(text)=>{
        this.setState({email:text});
    }
    handlePassword=(text)=>{
        this.setState({password:text});
    }
    handleLogin = () =>{
        if(this.state.email === "" || this.state.password === "")
        {
            Alert.alert(
                "Error",
                "Missing Email or Password",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else if(this.state.email.includes('@') === false || this.state.email.includes('.') === false)
        {
            Alert.alert(
                "Error",
                "Please input a valid email address.",
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewUser')}>
                    <Text style={styles.forgot_button}>Not A User? Create Account</Text>
                </TouchableOpacity>
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

