import {StyleSheet, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width;
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
    helpButton : {
        height : 40,
        width : 40,
        borderRadius : 100,
        alignItems : "center",
        justifyContent : "center",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom : screenWidth * 1.62,
        right : -20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    helpTitleText: {
        fontSize : 30,
        textAlign : 'center'
    },
})

export default mapStyles;