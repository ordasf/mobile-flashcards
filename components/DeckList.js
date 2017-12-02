import React from 'react'
import { View, FlatList } from 'react-native'
import DeckListItem from './DeckListItem'

class DeckList extends React.Component {

  selectDeck = (deck) => {
    const { navigation } = this.props
    navigation.navigate('DeckDetail', { deck })
  }

  render() {
    const { decks } = this.props.screenProps
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