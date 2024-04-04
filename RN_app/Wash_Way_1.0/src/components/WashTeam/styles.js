import { StyleSheet } from "react-native";
import { COLORS ,SIZES ,FONTS } from '../../constants/theme';

const style = StyleSheet.create({

    container:{
    

        alignItems:'center',
     

    },

    button:{
        width: '90%' ,
        backgroundColor : COLORS.primary,
        alignItems: 'center',   // horizontally align
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 5,

 
    },
    btText:{
        color:'black',
        fontWeight:'bold'
    }
});

export default style;