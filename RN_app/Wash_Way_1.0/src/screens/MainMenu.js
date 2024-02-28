import { SafeAreaView, TextInput,TouchableOpacity, Text, View } from 'react-native'
import styles from '../styles/MainMenuStyle';
import { COLORS ,SIZES ,FONTS } from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';

import HomeScreen from './HomeScreen';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainMenu = ({navigation}) => {
  return (
  
    <SafeAreaView style = {styles.SafeArea}>
        

        {/* main title */}
        <View>
            <Text>
                WashWay
            </Text>
        </View>

        {/* first container*/}
        <View style = {styles.firstContainer}>
            <View style = {styles.firstsubContainer}>

                <Text style = {styles.balanceText1}>
                    Balance
                </Text>

                <TouchableOpacity style = {styles.greyButton}>
                    <Text style = {styles.balanceText2}>
                        {0.00}$
                    </Text>
                </TouchableOpacity>
              
            </View>        

            <View style = {styles.firstsubContainer}>

                <TouchableOpacity style = {styles.redButton}>
                    <Text>Top Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.redButton}>
                    <Text>Book a Wash</Text>
                </TouchableOpacity>
                
            </View>

        </View>

        {/* search bar*/}
        <View style = {styles.TextInputContainer}>
      
            <TextInput placeholder='Your Location' style = {styles.textInput1}></TextInput>
            
        </View>

        {/* container for map + profile */}
        <View>

             {/*map  */}
            <View>
                
            </View>
            
            {/* profile */}
            <View>
                
            </View>

        </View>

        {/* container for available sevices */}
        <View>
                
        </View>


    </SafeAreaView>
  )
}

export default MainMenu
