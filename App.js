import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import {getDecks, setLocalNotification} from "./utils/helper";

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: (<MaterialCommunityIcons name={'cards'} size={30} />)
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: (<MaterialIcons name={'library-add'} size={30} />)
    }
  },
})

const Stack = StackNavigator({
  MainScreen: {
    screen: Tabs,
    navigationOptions: {
      title: 'Decks',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black'
      },
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.deck.title}`,
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    }
  }
}, {
  navigationOptions: {
    headerTitleStyle: {
      color: 'white'
    },
    headerStyle: {
      backgroundColor: 'black'
    },
  }
})

export default class App extends React.Component {

  state = {
    decks: []
  }

  addDeck = (newDeck) => {
    this.setState(state => ({
      decks: [...state.decks, newDeck]
    }))
  }

  addCard = (deckUpdated) => {
    this.setState(state => ({
      decks: state.decks.map(deck => {
        if (deck.title === deckUpdated.title) {
          return deckUpdated
        }
        return deck
      })
    }))
  }

  componentDidMount() {
    setLocalNotification()
    getDecks()
    .then(decks => {
      decks = decks !== null ? decks : {}
      this.setState({
        decks: Object.keys(decks).map(key => (decks[key]))
      })
    })
  }

  render() {
    const props = {
      decks: this.state.decks,
      addDeck: this.addDeck,
      addCard: this.addCard
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={styles.body} >
          <Stack screenProps={props}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 40
  }
});
