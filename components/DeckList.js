import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { getDecks } from '../utils/helper'

class DeckList extends React.Component {

  state = {
    decks: []
  }

  componentDidMount() {
    getDecks()
      .then(decks => {
        this.setState({ decks: Object.keys(decks) })
      })
  }

  render() {
    const { decks } = this.state
    console.log(decks)
    return (
      <View>
        <Text>DeckList</Text>
        <FlatList
          data={decks}
          renderItem={({ item }) => (<Text>{item}</Text>)}
          keyExtractor={(item, index) => (item)}
        />
      </View>
    )
  }

}

export default DeckList