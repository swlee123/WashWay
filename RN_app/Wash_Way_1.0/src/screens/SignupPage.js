
import React from 'react'
import styles from '../styles/search';
import { SafeAreaView , Text, View ,TouchableOpacity ,TextInput ,Image} from 'react-native';
import icons from '../constants/icons';
import images from '../constants/images';

const SignupPage= ({navigation}) => {
  return (
    <SafeAreaView style = {styles.loginSafeArea}>

        {/* container for h1 */}
        <View style = {styles.loginTitleContainer}>
            <Text style = {styles.loginTitle}>
              Create Account
            </Text>
        </View>
        
        {/* container for h2*/}
        <View style = {styles.loginContainer1}>
          <Text style = {styles.loginText}>
            Create an account to get started
          </Text>
        </View>

        {/* container for text input */}
        <View style = {styles.loginTextInputContainer}> 
          <TextInput placeholder='Email' style = {styles.textInput1}></TextInput>
          <TextInput placeholder='Password' secureTextEntry = {true} style = {styles.textInput1}></TextInput>
          <TextInput placeholder='Comfirm Password' secureTextEntry = {true} style = {styles.textInput1}></TextInput>
        </View>


        {/* container for signin/signup button */}
        <View >
          <TouchableOpacity style = {styles.button_1_login }>
            <Text style = {{fontWeight: 'bold', color : 'white'}}>
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.button_2_login}>
            <Text onPress = {()=> navigation.navigate("Login")} style = {{fontWeight: 'bold'}}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>

        {/* container for words above button */}
        <View style = {styles.loginSmallTextContainer2}>
          <Text style = {styles.loginSmallText2} >Or continue with</Text>
        </View>
        
        {/* container for fast login button */}
        <View style = {styles.socialMediaContainer}>

          <TouchableOpacity style = {styles.button_3}>
            <Image style = {styles.mediaIcon} source={icons.google}/>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button_3}>
            <Image style = {styles.mediaIcon} source={icons.meta}/>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button_3}>
            <Image style = {styles.mediaIcon} source={icons.apple}/>
          </TouchableOpacity>

        </View>

    </SafeAreaView>
  )
}

export default SignupPage;