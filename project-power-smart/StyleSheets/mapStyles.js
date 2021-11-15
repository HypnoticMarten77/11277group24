import {StyleSheet} from "react-native";

const mapStyles = StyleSheet.create({
    text : {
        fontSize : 25,
        marginBottom : 10,
        color : '#202c4a',
    },
    titleText : {
        fontSize : 50,
        marginBottom : 40,
        color : "#fff",
        fontFamily : "Futura-Medium",
    },
    descriptionHeader : {
        fontSize : 20,
        marginBottom : 12,
        color : '#202c4a',
        textDecorationLine : 'underline'
    },
    icon : {
        marginRight : 10,
        marginBottom : 10,
    },
    paragraph : {
        fontSize : 20,
        justifyContent: "center",
        textAlign: "center",
        marginBottom : 20,
        color : '#202c4a',
    },
    button: {
        marginTop : 40,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 2,
        color: 'white',
        fontSize: 24,
        overflow: 'hidden',
        padding: 12,
        flexDirection : 'row',
        alignItems : 'center',
    },
    textButton: {
        fontSize: 15,
        color: 'black',
        lineHeight : 15,
    },
})

export default mapStyles;