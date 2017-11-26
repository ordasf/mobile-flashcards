import React from 'react'
import { View, FlatList } from 'react-native'
import DeckListItem from './DeckListItem'
import { getDecks } from '../utils/helper'

class DeckList extends React.Component {

  state = {
    decks: []
  }

  componentDidMount() {
    getDecks()
      .then(decks => {
        decks = decks !== null ? decks : {}
        this.setState({
          decks: Object.keys(decks).map(key => (decks[key]))
        })
      })
  }

  selectDeck = (deck) => {
    const { navigation } = this.props
    navigation.navigate('DeckDetail', { deck })
  }

  render() {
    const { decks } = this.state
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({ item }) => (<DeckListItem deck={item} selectDeck={this.selectDeck}/>)}
          keyExtractor={(item, index) => (item.title)}
        />
      </View>
    )
  }

}

export default DeckList