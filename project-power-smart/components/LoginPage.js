import {Alert, Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import React from "react";
import styles from "../StyleSheets/AppStyling"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import loginStyles from '../StyleSheets/loginStyles'

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
                "Missing email or password.",
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


                <Image style={styles.image} source={require("../assets/powersmart.png")}/>
                <StatusBar style="auto"/>
                <View style = {{flexDirection : 'row', alignItems : "center"}}>
                    <SimpleLineIcons style = {{marginRight : 10,}}name={"user"} color={"black"} size={25} />
                    <View style={loginStyles.viewInput}>
                        <TextInput
                            style={loginStyles.textInput}
                            placeholderTextColor="gray"
                            onChangeText={(text) =>this.handleEmail(text)}
                            textAlignVertical='top'
                            placeholder = "Enter Email"
                            keyboardType="visible-password"
                            autoCapitalize='none'
                            autoCorrect={false}

                        />
                    </View>
                </View>

                <View style = {{flexDirection : 'row', alignItems : "center"}}>
                    <SimpleLineIcons style = {{marginRight : 10,}}name={"lock"} color={"black"} size={25} />
                    <View style={loginStyles.viewInput}>
                        <TextInput
                            style={loginStyles.textInput}
                            placeholder = "Enter Password"
                            placeholderTextColor="gray"
                            keyboardType="visible-password"
                            secureTextEntry={true}
                            textAlignVertical='top'
                            onChangeText={(text) =>this.handlePassword(text)}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewUser')}>
                    <Text style={{height : 30, marginTop : 10, color : 'blue'}}>Not a user? Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{height : 30, color : 'blue'}}>Forgot Password?</Text>
                </TouchableOpacity>


                <TouchableOpacity style={loginStyles.button} onPress={() => this.handleLogin()}>
                    <SimpleLineIcons style = {{marginRight : 10,}}name={"login"} color={"black"} size={20} />
                    <Text style = {loginStyles.textButton}> Login</Text>
                </TouchableOpacity>

            </View>
        );
    }
}


