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
      console.log(decks)
      const newDecks = {
        ...decks,
        [title]: {
          title,
          questions: []
        }
      }
      console.log(newDecks)
      AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks))
    })
}