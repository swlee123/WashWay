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

    // look for better font please
    MainTitle : {
        fontSize: SIZES.large-3,
        marginBottom : hp("3%"),
        marginTop : hp("-10%"),
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

    // map + profile container 
    m_pContainer : {
 
        flexDirection: 'row',
        paddingHorizontal : wp("3%"),
        paddingBottom : hp("3%"),
        justifyContent : 'center',
        alignItems : 'center',
    },

    // map container 
    mapContainer : {
        borderRadius : 20,
        flex : 1,
        backgroundColor : "#F3F3F3",
        width : wp("30%"),
        height : hp("23%"),
        margin : wp("3%"),
        
        alignItems : 'center',
    },
    // profile container 
    profileContainer : {
        borderRadius : 20,
        flex : 1,
        backgroundColor : "#F3F3F3",
        width : wp("30%"),
        height : hp("23%"),
        margin : wp("3%"),
      
    },

    // profile button 
    profileButton : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '60%',
        marginTop : hp("5%"),
    },

    userIcon : {
        resizeMode: 'contain',
        width : '70%',
        height : '100%',
    },

    profileText1 : {
        fontSize : SIZES.normal,
        
    },
    profileText2 : {
        fontSize : SIZES.small,
        fontWeight : 'bold',
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
       
        paddingHorizontal : hp("20%"),
        paddingBottom : hp("2%"),
    },

    // available service container 


    
});

export default styles;