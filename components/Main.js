import React, {useState, useEffect } from 'react'
import { getTaplist } from '../api'
import { 
  View, 
  StyleSheet,
  Text,
  ScrollView,
  Title
  } from 'react-native'


const Main = () => {
  const [list, setList] = useState(null)

  useEffect(() => {
    getTaplist()
    .then(result => {
      console.log(result.beerList)
      setList(result)
    })
  }, [])

  return(
    <View>
      {list && 
        <ScrollView>
          <Text style={styles.title}>{list.name}</Text>
          {list.beerList.map(beer => {
            return (
              <View key={beer.$.id}
                style={styles.beerItem}
              >
                <Text>{beer.Name[0]}</Text>
                <Text>style: {beer.Style[0]}</Text>
                <Text>abv: {beer.Abv[0]}%</Text>
                <Text>
                  Brewery: {beer.Brewery[0].Name[0]} ({beer.Brewery[0].City[0]})
                </Text>
              </View>
            )
          })}
        </ScrollView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 25,
    textAlign: 'center'
  },
  beerItem: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 3,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderRadius: 5
  }

});




export default Main