import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , Text, View ,TouchableOpacity ,TextInput ,Image} from 'react-native';
import styles from './src/styles/search';
import { COLORS ,SIZES ,FONTS } from './src/constants/theme';
import icons from './src/constants/icons';
import images from './src/constants/images';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// aws stuff 
import {Amplify , Auth} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

//
import SearchResult from './src/screens/SearchResults';
import LoginPage from './src/screens/LoginPage';
import SignupPage from './src/screens/SignupPage';
import HomeScreen from './src/screens/HomeScreen';
import MainMenu from './src/screens/MainMenu';
import WashHistory from './src/screens/sidebar/WashHistory';
import TnC from './src/screens/sidebar/TnC';
import Notification from './src/screens/sidebar/Notification';
import  Settings  from './src/screens/sidebar/Settings';
import Voucher from './src/screens/sidebar/Voucher';
import FAQ from './src/screens/sidebar/FAQ';

const Drawer = createDrawerNavigator();

// need to write functions to get authdata ,  either from local or from server
const authData = false;
const Stack = createNativeStackNavigator();

const FirstScreen = ({authData}) =>{
  return (
    <NavigationContainer>
      
        {authData ? (
          // If authData exists, the user is authenticated and we show the Main Menu only
          
          <Drawer.Navigator initialRouteName='MainMenu'
                  screenOptions={{
                      drawerStyle: {
                          backgroundColor: 'white',
                          width: 220,
                      },
                      headerStyle : {
                          backgroundColor: COLORS.primary,
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                      drawerActiveTintColor: 'blue',
                      drawerLabelStyle: {
                          color: '#111',
                      },
                      
                  }}
              >
              <Drawer.Screen name="MainMenu" component={MainMenu} />
              <Drawer.Screen name="WashHistory" component={WashHistory} />
              <Drawer.Screen name="TnC" component={TnC} />
              <Drawer.Screen name="Notification" component={Notification} />
              <Drawer.Screen name="Setting" component={Settings} />
              <Drawer.Screen name="Voucher" component={Voucher} />
              <Drawer.Screen name="FAQ" component={FAQ} />
              
              {/* move logout and dark/light mode to Setting page for easier development */}

          </Drawer.Navigator>
         
        ) 
        : (
          // If not authenticated, show the login, signup, and home screens
          <Stack.Navigator>
            <Stack.Screen name="SearchResult" component={SearchResult} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignupPage} />
            
          </Stack.Navigator>

        )}
   

    </NavigationContainer>
  );
}


export default function App() {
  return (
    <FirstScreen authData={authData} />
  );
};

