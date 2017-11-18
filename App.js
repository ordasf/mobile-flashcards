import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

const Tabs = TabNavigator({
  NewDeck: {
    screen: NewDeck,
  },
  DeckList: {
    screen: DeckList,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <View style={styles.body} >
          <Tabs />
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
