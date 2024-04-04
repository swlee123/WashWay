import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <View style={styles.container}>
        <MapView style={styles.map}/>

    </View>
  )
}

export default Map