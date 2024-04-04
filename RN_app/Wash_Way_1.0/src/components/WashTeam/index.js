import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import WashTeamRow from '../WashTeamRow'
import { COLORS } from '../../constants/theme'
import styles from '../WashTeam/styles'


// will use API to query washteam available in 3/5km radius
const WashTeam = () => {
  return (
    <View style = {styles.container}>
   
      <WashTeamRow
      service={"Normal Wash"}
      price = {10}
      earliest_time={"10:00 am"}
      team_count={3} />

      <WashTeamRow
         service={"Supreme Wash"}
         price = {30}
         earliest_time={"11:00 am"}
         team_count={2}
         />
      <WashTeamRow />

      <TouchableOpacity  style={styles.button}>
        <Text style={styles.btText}>
          Choose a Service
        </Text>
      </TouchableOpacity>
    </View>


  )
}

export default WashTeam