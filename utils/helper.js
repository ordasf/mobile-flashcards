import { AsyncStorage } from 'react-native'

const DECKS_KEY = 'DECKS_KEY'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
}

export function saveDeckTitle(title) {
  AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
    .then(decks => {
      const newDecks = {
        ...decks,
        [title]: {
          title,
          questions: []
        }
      }
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks))
    })
}

export function addCardToDeck(title, card) {
  AsyncStorage.getItem(DECKS_KEY)
    .then(data => (JSON.parse(data)))
    .then(decks => {
      const { questions } = decks[title]
      questions.push(card)
      const newDecks = {
        ...decks,
        [title]: {
          title,
          questions
        }
      }
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks))
    })
}