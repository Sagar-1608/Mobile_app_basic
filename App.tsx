import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginCard from './src/components/LoginCard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#F5F5F5'}
      />
      <LoginCard />
      
     </SafeAreaView>
  );
}


const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
  }}

)

export default App;
