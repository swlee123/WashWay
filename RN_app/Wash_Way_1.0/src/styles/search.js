import {StyleSheet ,Platform} from 'react-native';

import { COLORS ,SIZES ,FONTS} from '../constants/theme';

const styles = StyleSheet.create({
    // we can define frequently used style for general components here

    // common css for all pages
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

    normalText : {
        fontSize : SIZES.normal,
        fontWeight : 'bold',
    },

    xsmallText : {
        fontSize : SIZES.xs,

    },

    // end of common css for all pages

    
    // login's elements style

    loginSafeArea : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // main image at home page
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
    },
    
    // css for LoginPage/SignUpPage
    loginTitle : {
        height : 50,
        fontSize : SIZES.large,
        color : COLORS.primary,
        fontWeight : 'bold',
    },

    loginTitleContainer : {

        justifyContent : 'center',
        alignItems : 'center',
        padding:20,
    },

    loginContainer1 : {
        justifyContent: 'center',
        alignItems: 'center',
        width : '60%',
    },

    loginTextInputContainer : {
        margin: 20,
        paddingTop : 20,
        paddingLeft:10,
        paddingRight:10,
    },

    loginText : {
      
        fontSize : SIZES.normal,
        fontWeight : 'bold',
        textAlign : 'center',
    },

    loginSmallTextContainer1 : {
      
        alignItems : 'flex-end',
        width : '100%',
        paddingRight : 50,
        marginBottom : 20,
        marginTop : 0,
    },

    loginSmallTextContainer2 : {
        marginTop :20,
        alignItems : 'center',
        
    },

    loginTOStyle: {
        alignSelf: 'stretch', // This makes it fill the available space
    },

    loginSmallText1 : {
        fontSize : SIZES.xs,
        color : COLORS.primary,
        fontWeight : "bold",
        textAlign : 'right',
    },

    loginSmallText2 : {
        fontSize : SIZES.xs,
        fontWeight : "bold",
        color : COLORS.primary,

    },

    button_1_login: {
        width: 300 ,
        height: 50,
        backgroundColor : COLORS.primary,
        color: 'white',
        borderRadius: 15,
        justifyContent: 'center', // vertivally algin
        alignItems: 'center',   // horizontally align
        marginBottom : 15,

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

    button_2_login : {
        width: 300 ,
        height: 50,
        backgroundColor : COLORS.white,
        color: 'black',
        borderRadius: 15,
        justifyContent: 'center', // vertivally algin
        alignItems: 'center',   // horizontally align
       
    },


     // container for social media 
    socialMediaContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        margin : 10,
    },
    // buttons for social media 
    button_3 : {
        width : 55,
        height: 45,
        backgroundColor : '#ECECEC',
        borderRadius: 10,
        marginHorizontal : 10,
        alignItems : 'left',
      
    },

    // icons for social media
    mediaIcon : {
   
        width : 30,
        height : 25,
        marginVertical :10,
        marginHorizontal:12,
        resizeMode: 'contain',
    },



});

export default styles;