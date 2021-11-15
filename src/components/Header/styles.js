import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../common";

export default StyleSheet.create({
    container:{
        marginTop:25,
    },
    headerText: {
        fontFamily:FONTS.bold,
        color:COLORS.white,
        fontSize:19,
    },
    divider:{
        width:155,
        paddingBottom:20,
        borderBottomColor:COLORS.sun,
        borderBottomWidth:2,
    }
})