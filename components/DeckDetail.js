import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckButton from './DeckButton'

class DeckDetail extends React.Component {

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length}</Text>
        </View>
        <View style={styles.quiz}>
          <DeckButton
            text={'Add Card'}
            onPress={() => {console.log('add card')}}
            customStyleButton={{ backgroundColor: 'white' }}
            customStyleText={{ color: 'black' }}
          />
          <DeckButton
            text={'Start Quiz'}
            onPress={() => {console.log('start quiz')}}
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
  }
})

export default DeckDetail