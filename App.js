import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name={'cards'}
          size={30}
        />
      )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name={'library-add'}
          size={30}
        />
      )
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
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black'
      },
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black'
      },
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: 'black'
      },
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={styles.body} >
          <Stack />
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
    marginTop: 20
  }
});
