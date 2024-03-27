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
        height : '70%',
    },

    profileText1 : {
        fontSize : SIZES.normal,
        
    },
    profileText2 : {
        fontSize : SIZES.small,
        fontWeight : 'bold',
    },

    // servies button container 
    servicesContainer :{
        height : hp("15%"),
        width : wp("80%"),
    
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        borderRadius : 10,

        shadowColor: "#000",

        // ios part for shadow 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        // andoird part for shadow
        
        
        
    },

    // service button
    serviceButton : {
        justifyContent : 'center',
        alignItems : 'center',
        width : wp("30%"),
        height : hp("15%"),

        borderRadius : 20,
    },

    // servies icons
    washIcon : {
        resizeMode: 'contain',
        width : '40%',
        height : '40%',
    },

    // service text 
    serviceText : {
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
        width : wp("80%"),
        height : hp("7%"),
        borderRadius :15,
        backgroundColor : '#F6F4EB',
        padding:10,
        marginTop:10,
            
    },
    
    TextInputContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        paddingBottom : hp("2%"),
        width : wp("100%"),
    },

    // available service container 


    
});

export default styles;