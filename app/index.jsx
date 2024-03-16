import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Hello, My Budget App!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: { 
    fontSize: 24,
  }
})