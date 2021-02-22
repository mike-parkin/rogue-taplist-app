import React, {useState, useEffect } from 'react'
import { getTaplist } from '../api'
import { 
  View, 
  StyleSheet,
  Text,
  FlatList
  } from 'react-native'
  import { List, ListItem } from 'react-native-elements'

const Main = () => {
  const [list, setList] = useState({})

  useEffect(() => {
    getTaplist()
    .then(result => {
      console.log(result.beerList)
      setList(result)
    })
  }, [])
  // const purveyor = list.Purveyor
  // const beers = list.Beers
  // const BeerList = beers[0].Beer

  return(
    <View>
      <Text>{list.name}</Text>
      <List>
        <FlatList 
          data={list.beerlist}
          renderItem={({ item }) => (
            <ListItem>
              <Text>brewery: {item.brewery[0]}</Text>
              <Text>beerName: {item.name[0]}</Text>
              <Text>beerStyle: {item.style[0]}</Text>
            </ListItem>
          )}
        />
      </List>     
    </View>
  )
}




export default Main