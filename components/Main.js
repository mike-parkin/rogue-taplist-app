import React, {useState, useEffect } from 'react'
import { getTaplist } from '../api'
import { 
  View, 
  StyleSheet,
  Text
  } from 'react-native'

const Main = () => {

  useEffect(() => {
    getTaplist()
    .then(list => {
      console.log(list)
    })
  }, [])


  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}




export default Main