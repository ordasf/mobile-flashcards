import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckInput from './DeckInput'
import DeckButton from './DeckButton'
import { addCardToDeck } from '../utils/helper';

class AddCard extends React.Component {

  state = {
    questionInput: '',
    answerInput: ''
  }

  updateQuestionInput = (questionInput) => {
    this.setState({ questionInput })
  }

  updateAnswerInput = (answerInput) => {
    this.setState({ answerInput })
  }

  submitCard = () => {
    const { deck } = this.props.navigation.state.params
    const { questionInput, answerInput } = this.state
    const card = {
      question: questionInput,
      answer: answerInput
    }
    addCardToDeck(deck.title, card)
    this.props.navigation.goBack()
  }

  render() {
    const { questionInput, answerInput } = this.state
    return (
      <View style={styles.container}>
        <DeckInput
          inputValue={questionInput}
          placeholder={'Question'}
          onChangeText={this.updateQuestionInput}
        />
        <DeckInput
          inputValue={answerInput}
          placeholder={'Answer'}
          onChangeText={this.updateAnswerInput}
        />
        <DeckButton
          text={'Submit'}
          onPress={this.submitCard}
          customStyleButton={styles.buttonStyle}
          customStyleText={styles.textButtonStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  buttonStyle: {
    backgroundColor: 'black'
  },
  textButtonStyle: {
    color: 'white'
  }
})

export default AddCard