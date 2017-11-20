import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function DeckButton({ text, onPress, customStyleButton, customStyleText }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.button, customStyleButton]}>
        <Text style={[styles.text, customStyleText]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  button: {
    width: 110,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {

  }
}
