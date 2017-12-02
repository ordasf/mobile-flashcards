import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const DECKS_KEY = 'DECKS_KEY'
const NOTIFICATION_KEY = 'NOTIFICATION_KEY'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
}

export function saveDeckTitle(title) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
    .then(decks => {
      const deck = {
        title,
        questions: []
      }
      const newDecks = {
        ...decks,
        [title]: deck
      }
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks))
      return deck
    })
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
    .then(decks => {
      const { questions } = decks[title]
      questions.push(card)
      const deck = {
        title,
        questions
      }
      const newDecks = {
        ...decks,
        [title]: deck
      }
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks))
      return deck
    })
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
  return {
    title: 'Take a Quiz!',
    body: `Don't forget to take your quiz today`,
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === 'null') {
        Permissions.askAsync(Permissions.Notifications)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))

            }
          })
      }
    })
}
