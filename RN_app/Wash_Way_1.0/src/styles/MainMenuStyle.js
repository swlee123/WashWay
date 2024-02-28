import {StyleSheet ,Platform} from 'react-native';

import { COLORS ,SIZES ,FONTS} from '../constants/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    SafeArea : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding:10,
        height: hp("18%"),
    },

    firstsubContainer : {
        justifyContent: 'center',
        alignItems: 'left',
        marginHorizontal : 5,
        padding:10,
        width: wp("40%"),
    },

    redButton : {
        // considered picking more suitable red color 
        backgroundColor : "red",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: wp("30%"),
    },

    greyButton : {
        backgroundColor : "grey",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        width: wp("35%"),
        height: hp("8%"),
    },

    balanceText1 : {
        justifyContent : "center",
        fontSize : SIZES.normal,
        fontWeight: 'bold',
        marginLeft : wp("3%"),
    },

    balanceText2 : {
        color: 'white',
        fontSize : SIZES.large+3,
        fontWeight: 'bold',
        
    },

    // general text input 
    textInput1 :{
        borderColor : 'black',
        width : 300,
        height : 55,
        borderRadius :15,
        backgroundColor : '#F6F4EB',
        padding:10,
        margin:10,
            
    },
    
    TextInputContainer : {
        margin: 20,
        paddingTop : 20,
        paddingLeft:10,
        paddingRight:10,
    },



    
});

export default styles;