import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import QuizSummary from './QuizSummary'
import DeckButton from './DeckButton'

class Quiz extends React.Component {

  state = {
    index: 0,
    showAnswer: false,
    correctQuestions: 0,
    incorrectQuestions: 0,
    opacity: new Animated.Value(0),
    fontSize: new Animated.Value(1)
  }

  correctQuestion = () => {
    this.hideAnswer()
    this.setState(state => ({
      index: state.index + 1,
      correctQuestions: state.correctQuestions + 1,
    }))
  }

  incorrectQuestion = () => {
    this.hideAnswer()
    this.setState(state => ({
      index: state.index + 1,
      incorrectQuestions: state.incorrectQuestions + 1
    }))
  }

  restartQuiz = () => {
    this.hideAnswer()
    this.setState({
      index: 0,
      showAnswer: false,
      correctQuestions: 0,
      incorrectQuestions: 0,
    })
  }

  showAnswer = () => {
    const { opacity, fontSize } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.spring(fontSize, { toValue: 30, speed: 5 }).start()
  }

  hideAnswer = () => {
    const { opacity, fontSize } = this.state
    Animated.timing(opacity, { toValue: 0, duration: 0 }).start()
    Animated.spring(fontSize, { toValue: 1, speed: 5 }).start()
  }

  render() {
    const { questions } = this.props.navigation.state.params.deck
    const { index, opacity, fontSize } = this.state
    const { correctQuestions, incorrectQuestions } = this.state
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text>{`${index}/${questions.length}`}</Text>
        </View>
        { index === questions.length && (
          <QuizSummary
            questions={questions.length}
            correctAnswers={correctQuestions}
            incorrectAnswers={incorrectQuestions}
            restartQuiz={this.restartQuiz}
            navigation={this.props.navigation}
          />
        )}
        { index < questions.length && (
          <View style={styles.container}>
            <View style={styles.topView}>
              <Text style={styles.questionText}>{questions[index].question}</Text>
              <DeckButton
                text={'Show Answer'}
                onPress={() => this.showAnswer()}
                customStyleButton={{ backgroundColor: 'black' }}
                customStyleText={{ color: 'white' }}
              />
              <Animated.Text style={{ opacity, fontSize }}>{questions[index].answer}</Animated.Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    flex: 3,
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