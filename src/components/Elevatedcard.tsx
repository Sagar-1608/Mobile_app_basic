import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcard() {
  return (
   <View>
         <Text style={styles.heading}> Elevated Card</Text>
         <ScrollView horizontal={true} style={styles.container}>
           <View style={[styles.card,styles.cardOne]}>
             <Text>Red</Text>
           </View>
           <View style={[styles.card,styles.cardTwo]}>
             <Text>Blue</Text>
           </View>
           <View style={[styles.card,styles.cardThree]}>
             <Text>Green</Text>
           </View>
           <View style={[styles.card,styles.cardFour]}>
             <Text>Orange</Text>
           </View>
           <View style={[styles.card,styles.cardFour]}>
             <Text>Orange</Text>
           </View>
           <View style={[styles.card,styles.cardFour]}>
             <Text>Orange</Text>
           </View>
           <View style={[styles.card,styles.cardFour]}>
             <Text>Orange</Text>
           </View>
          
         </ScrollView>
       </View>
  )
}




const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
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
