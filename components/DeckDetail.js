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
    const { deck } = this.props.navigation.state.params
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
    backgroundColor: 'red'
  },
  quiz: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  deckName: {
    fontSize: 40
  },
  cardsNumber: {
    fontSize: 30
  }
})

export default DeckDetail