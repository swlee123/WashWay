import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , Text, View ,TouchableOpacity ,TextInput ,Image} from 'react-native';
import styles from './src/styles/search';
import { COLORS ,SIZES ,FONTS } from './src/constants/theme';
import icons from './src/constants/icons';
import images from './src/constants/images';

export default function App() {
  return (
 
    <SafeAreaView style = {styles.loginSafeArea}>
        <View style = {styles.loginContainer}>
          <Image style = {styles.loginImage} source = {images.loginImage}/>
        </View>

        <View style = {styles.loginTextContainer}> 
          <Text style = {styles.loginText}> 
            Ultimate car cleaning experience {'\n'}
              welcome to your car's dream spa!
           </Text>
        </View>

        <View style = {styles.loginButtonContainer}>
          <TouchableOpacity style = {styles.button_1}>
            <Text  style = {{fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button_2}>
            <Text style = {{fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity>

        </View>

    </SafeAreaView>
  );
};
