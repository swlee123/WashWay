import styles from '../styles/search';
import { SafeAreaView , Text, View ,TouchableOpacity ,Image} from 'react-native';
import { COLORS ,SIZES ,FONTS } from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';


const HomeScreen = ({navigation}) => {
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
        <Text  onPress = {()=> navigation.navigate("Login")} style = {{fontWeight: 'bold', color:"white"}}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button_2}>
        <Text onPress = {()=> navigation.navigate("SignUp")}style = {{fontWeight: 'bold'}}>
          Register
        </Text>
      </TouchableOpacity>

    </View>

  </SafeAreaView>
  )
}

export default HomeScreen