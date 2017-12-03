import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import DeckButton from './DeckButton'
import { clearLocalNotification, setLocalNotification} from "../utils/helper";

class QuizSummary extends React.Component {

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification)
  }

  render() {
    const { questions, correctAnswers } = this.props
    return (
      <View style={styles.container}>
        {questions === 0 && (
          <View style={styles.topView}>
            <Text style={styles.titleText}>This Deck does not have any Questions</Text>
          </View>
        )}
        {questions > 0 && (
          <View style={styles.topView}>
            <Text style={styles.titleText}>Score:</Text>
            <Text style={styles.percentageText}>{((correctAnswers/questions) * 100)}%</Text>
          </View>
        )}
        <View style={styles.bottomView}>
          <DeckButton
            text={'Back to Deck'}
            onPress={() => this.props.navigation.goBack()}
            customStyleButton={{ backgroundColor: 'black' }}
            customStyleText={{ color: 'white' }}
          />
          <DeckButton
            text={'Restart Quiz'}
            onPress={() => this.props.restartQuiz()}
            customStyleButton={{ backgroundColor: 'white', borderColor: 'black' }}
            customStyleText={{ color: 'black' }}
          />
        </View>
      </View>
    )
  }

}

QuizSummary.propTypes = {
  questions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  incorrectAnswers: PropTypes.number.isRequired,
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
  titleText: {
    fontSize: 40,
    margin: 10
  },
  percentageText: {
    fontSize: 60,
    margin: 10
  }
})

export default QuizSummary