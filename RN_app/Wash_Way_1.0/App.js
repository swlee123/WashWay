import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , Text, View ,TouchableOpacity ,TextInput ,Image} from 'react-native';
import styles from './src/styles/search';
import { COLORS ,SIZES ,FONTS } from './src/constants/theme';
import icons from './src/constants/icons';
import images from './src/constants/images';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/screens/LoginPage'
import SignupPage from './src/screens/SignupPage';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name= "Login" component={LoginPage}/>
        <Stack.Screen name= "SignUp" component={SignupPage}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
};

