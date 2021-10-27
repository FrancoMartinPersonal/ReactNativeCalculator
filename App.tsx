import React from 'react'
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, View } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { styles } from './src/Themes/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App


