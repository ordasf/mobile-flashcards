import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckButton from './DeckButton'

class DeckDetail extends React.Component {

  navigateToScreen = (screen) => {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    navigation.navigate(screen, { deck })
  }

  render() {
    const deckTitle = this.props.navigation.state.params.deck.title
    const { decks } = this.props.screenProps
    const deck = decks.filter(deck => (deck.title === deckTitle))[0]
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.deckName}>{deck.title}</Text>
          <Text style={styles.cardsNumber}>{deck.questions.length} cards</Text>
        </View>
        <View style={styles.quiz}>
          <DeckButton
            text={'Add Card'}
            onPress={() => {this.navigateToScreen('AddCard')}}
            customStyleButton={{ backgroundColor: 'white' }}
            customStyleText={{ color: 'black' }}
          />
          <DeckButton
            text={'Start Quiz'}
            onPress={() => {this.navigateToScreen('Quiz')}}
            customStyleButton={{ backgroundColor: 'black'}}
            customStyleText={{ color: 'white' }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quiz: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  deckName: {
    fontSize: 40
  },
  cardsNumber: {
    fontSize: 30
  }
})

export default DeckDetail