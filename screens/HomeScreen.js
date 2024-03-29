import React from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import FoodList from '../src/components/FoodList'
import SearchBar from '../src/components/SearchBar'
import Title from '../src/components/Title'

const HomeScreen = () => {
 
    
  return (

    <View style={styles.container}> 
    <StatusBar
      backgroundColor="#3E3E3E"
      barStyle="light-content"
    />
      <View style={styles.container2}>
        <SearchBar/>
        <Title title='TRENDING' margin={16}/>
        <FoodList width={100} height={100} fontSize={13}/>
        <Title title='RECENT' margin={40}/>
        <FoodList width={180} height={180} fontSize={16}/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E',
  },
  container2: {
    flex: 1,
  }
})

export default HomeScreen