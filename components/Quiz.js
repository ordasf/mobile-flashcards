import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QuizSummary from './QuizSummary'
import DeckButton from './DeckButton'

function showQuestion(questions, index) {
  return (<View />)
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
    showAnswer: false,
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
    const { correctQuestions, incorrectQuestions } = this.state
    return (
      <View style={styles.container}>
        { index === questions.length && (
          <QuizSummary
            questions={questions.length}
            correctAnswers={correctQuestions}
            incorrectAnswers={incorrectQuestions}
          />
        )}
        { index < questions.length && (
          <View style={styles.container}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text>{`${index}/${questions.length}`}</Text>
            </View>
            <View style={styles.topView}>
            <Text style={styles.questionText}>{questions[index].question}</Text>
            <DeckButton
              text={'Answer'}
              onPress={() => this.setState({ showAnswer: true })}
              customStyleButton={{ backgroundColor: 'black' }}
              customStyleText={{ color: 'white' }}
            />
            {this.state.showAnswer && (<Text>{questions[index].answer}</Text>)}
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
          </View>
        )}
      </View>)
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