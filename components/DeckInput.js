import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function DeckInput({ inputValue, placeholder, onChangeText }) {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={inputValue => onChangeText(inputValue)}
      placeholder={placeholder}
      value={inputValue}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    margin: 10
  }
})
