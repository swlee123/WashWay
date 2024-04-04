import { View, Text,Image} from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS ,SIZES ,FONTS } from '../../constants/theme';
import icons from '../../constants/icons';
import images from '../../constants/images';
import Ionicons from 'react-native-vector-icons/Ionicons';

// after that will figure out how to use API to query wash team data from 3km radius
const WashTeamRow = ({service,price,earliest_time,team_count}) => {
  return (
    <View style = {styles.container}>

      <Image style = {styles.image} source={icons.carwash}/>

      <View style={styles.middleContainer}>
        <Text style = {styles.teams}>
          {service?service:"Service NA"}
          <Ionicons name="person" size={12}  />
          {team_count?team_count:"NA"}
        </Text>

        <Text styles={styles.time}>
          {earliest_time? " Book on "+earliest_time:"NA"}
        </Text>
        
  
      </View>

      <View style= {styles.rightContainer}>
        <Ionicons name = "pricetag" size = {18} color={'#42d742'}/>
      </View>

      <Text style={styles.price}>
        est.RM {price?price:"NA"}
      </Text>

    </View>
  )
}

export default WashTeamRow
