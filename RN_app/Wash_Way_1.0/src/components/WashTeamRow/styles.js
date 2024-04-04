import { StyleSheet,Platform } from "react-native";
import { COLORS ,SIZES ,FONTS } from '../../constants/theme';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
    image:{
        height:60,
        width:70,
        resizeMode:'contain',
    },
    middleContainer:{
        flex:1,
        marginHorizontal:10,
    },
    teams:{
        fontWeight:'bold',
        marginBottom:5,
        fontSize:SIZES.small-2
    },
    time:{
        color: '#5d5d5d',
        fontSize:SIZES.xs,
    },
    rightContainer:{
        width:50,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    price:{
        fontWeight:'bold',
        fontSize:SIZES.small,
        marginLeft:5
    },



});

export default styles;