import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

class DeckListItem extends React.Component {

  render() {
    const { deck, selectDeck } = this.props
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {selectDeck(deck)}}>
          <Text style={styles.titleText}>{deck.title}</Text>
          <Text style={styles.questionsText}>{deck.questions.length} cards</Text>
        </TouchableOpacity>
        <View style={styles.separator}/>
      </View>
    )
  }
}

DeckListItem.propTypes = {
  deck: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15
  },
  titleText: {
    fontSize: 30
  },
  questionsText: {
    fontSize: 25
  },
  separator: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: 1,
  }
})

export default DeckListItem