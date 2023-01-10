import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Navigation from './src/Navigations/Navigation';
import Index from './src/Navigations/Index';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Index />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})