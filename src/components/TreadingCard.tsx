import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TreadingCard() {
  return (
    <View>
      <Text style={styles.heading}>Treading Card</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
 
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
},
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 4,
    margin: 8,
  },

  cardOne: {backgroundColor: 'orange'},
  cardTwo: {backgroundColor: 'blue'},
  cardThree: {backgroundColor: 'green'},
  cardFour: {backgroundColor: 'orange'},
});
