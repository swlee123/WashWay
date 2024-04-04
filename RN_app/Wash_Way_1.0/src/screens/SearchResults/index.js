import { View, Text } from 'react-native'
import React from 'react'
import Map from '../../components/SearchMap'
import WashTeam from '../../components/WashTeam'

const SearchResult = (props) => {
  return (
    <View>
      <Map />
      <WashTeam />
    </View>
  )
}

export default SearchResult