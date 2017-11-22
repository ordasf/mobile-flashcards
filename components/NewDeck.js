import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/helper';
import DeckButton from './DeckButton'
import DeckInput from './DeckInput'

class NewDeck extends React.Component {

  state = {
    inputValue: ''
  }

  submit = () => {
    saveDeckTitle(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  changeTextInput = (inputValue) => {
    this.setState({ inputValue })
  }

  render() {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What is the title of your new Deck?
        </Text>
        <DeckInput
          inputValue={inputValue}
          placeholder={'New Deck'}
          onChangeText={this.changeTextInput}
        />
        <DeckButton
          text={'Start Quiz'}
          onPress={this.submit}
          customStyleButton={styles.submitBtn}
          customStyleText={{ color: 'white' }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 50,
    padding: 5,
    backgroundColor: 'red',
    textAlign: 'center'
  },
  textInput: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5
  },
  submitBtn: {
    backgroundColor: 'black',
  },
  textBtn: {
    color: 'white',
    fontSize: 18
  }
})

export default NewDeck