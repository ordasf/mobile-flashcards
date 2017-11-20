import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
  },
  NewDeck: {
    screen: NewDeck,
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
    navigationOptions: {
      title: 'Decks',
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
