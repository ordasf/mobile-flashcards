import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/helper';

class NewDeck extends React.Component {

  state = {
    inputValue: ''
  }

  submit = () => {
    saveDeckTitle(this.state.inputValue)
    this.setState({ inputValue: '' })
  }

  render() {
    const { inputValue } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What is the title of your new Deck?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={inputValue => this.setState({inputValue})}
          placeholder={'Deck title'}
          value={inputValue}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
          <Text style={styles.textBtn}>Submit</Text>
        </TouchableOpacity>
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
    borderRadius: 4,
    padding: 10
  },
  textBtn: {
    color: 'white',
    fontSize: 18
  }
})

export default NewDeck