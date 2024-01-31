import {StyleSheet ,Platform} from 'react-native';

import { COLORS ,SIZES ,FONTS} from '../constants/theme';

const styles = StyleSheet.create({
    // we can define frequently used style for general components here

    // mostly use main button style with theme color
    button_1: {
        width: 130 ,
        height: 50,
        backgroundColor : COLORS.primary,
        color: 'white',
        borderRadius: 15,
        justifyContent: 'center', // vertivally algin
        alignItems: 'center',   // horizontally align

        // shadow 
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            },
            android: {
              elevation: 6,
            },
        }),
        
    },

    // white button 
    button_2 : {
        width: 130 ,
        height: 50,
        backgroundColor : COLORS.white,
        color: 'black',
        borderRadius: 15,
        justifyContent: 'center', // vertivally algin
        alignItems: 'center',   // horizontally align
        fontStyle : 'bold'
    },
    // buttons for social media 

    button_3 : {
        width : 55,
        height: 45,
        backgroundColor : '#ECECEC',
        borderRadius: 10,
    },

    // icons for social media
    mediaIcon : {
        width : 30,
        height : 25,
        marginLeft : 13,
        marginTop : 10,
    },

    // general text input 
    textInput1 :{
        borderColor : 'black',
        width : 300,
        height : 55,
        borderRadius :15,
        backgroundColor : '#F6F4EB',
        padding:10,
        
    },

    
    // login's elements style

    loginSafeArea : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginContainer: {
        flex:2,
        width : '80%',
        height : '30%',
        marginTop : '10%',

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
    },

    loginImage : {
        resizeMode: 'contain',
        width : '80%',
        height : '100%',
        
    },

    loginTextContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop : 10,
        paddingBottom :10,
       
    }
    ,
    loginText : {
        textAlign : 'center',
        fontSize : SIZES.small,
    },
    loginButtonContainer : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding:10,
    }
    
});

export default styles;