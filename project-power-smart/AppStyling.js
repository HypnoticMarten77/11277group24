import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5df6e",
        alignItems: "center",
        justifyContent: "center",
    },
    bigText : {
        fontSize : 50,
        marginBottom : 40,
        color : "#fff",
        fontFamily : "Futura-Medium",
    },
    charText : {
        fontSize : 50,
        color : "#fff",
        fontFamily : "Futura-Medium",
    },

    image: {
        marginTop : -50,
        width : 200,
        height: 200,
        resizeMode: "contain"
    },

    inputView: {
        backgroundColor: "#f0eee1",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    TextInputHome: {
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#f0eee1",
    },
    leftPos: {
        position: 'absolute',
        bottom : 30,
        left : 30,
    },
    rightPos : {
        position : 'absolute',
        bottom: 30,
        right : 30,
    }
});

export default styles;