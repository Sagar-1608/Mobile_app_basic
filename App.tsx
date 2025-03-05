import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ScrollView,
} from 'react-native';
import LoginCard from './src/components/LoginCard';
import FlatCard from './src/components/FlatCard';
import Elevatedcard from './src/components/Elevatedcard';
import TreadingCard from './src/components/TreadingCard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#121212' : '#F5F5F5'}
      /> */}

        <LoginCard />
        <FlatCard />
        <Elevatedcard />
        <TreadingCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles= StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent:"center",
//   //   alignItems: 'center',
//   // }}

// )

export default App;
