import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DeckButton from './DeckButton'

function showQuestion(questions, index) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.questionText}>{questions[index].question}</Text>
        <TouchableOpacity>
          <Text>Answer</Text>
        </TouchableOpacity>
        <Text style={styles.answerText}>{questions[index].answer}</Text>
      </View>
      <View style={styles.bottomView}>
        <DeckButton
          text={'Correct'}
          onPress={this.correctQuestion}
          customStyleButton={{ backgroundColor: 'green', borderColor: 'green' }}
          customStyleText={{ color: 'white' }}
        />
        <DeckButton
          text={'Incorrect'}
          onPress={this.incorrectQuestion}
          customStyleButton={{ backgroundColor: 'red', borderColor: 'red' }}
          customStyleText={{ color: 'white' }}
        />
      </View>
    </View>)
}

function showSummary() {
  return (
    <View style={styles.container}>
      <Text>Summary of the Quiz</Text>
    </View>
  )
}

class Quiz extends React.Component {

  state = {
    index: 0,
    correctQuestions: 0,
    incorrectQuestions: 0
  }

  correctQuestion = () => {
    this.setState(state => ({
      index: state.index + 1,
      correctQuestions: state.correctQuestions + 1
    }))
  }

  incorrectQuestion = () => {
    this.setState(state => ({
      index: state.index + 1,
      incorrectQuestions: state.incorrectQuestions + 1
    }))
  }

  render() {
    const { questions } = this.props.navigation.state.params.deck
    const { index } = this.state
    return (showQuestion(questions, index))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 4,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    flex: 3,
    backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 60,
    margin: 10
  },
  answerButton: {
    margin: 10
  },
  answerText: {
    fontSize: 40,
    margin: 10
  }
})

export default Quiz