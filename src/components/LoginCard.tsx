import { View, Text, TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function LoginCard() {

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  return (
  <View style={styles.loginBox}>
          <Text style={styles.title}>Login</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Enter Email Id"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
  
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
  
          <Text style={styles.footerText}>Don't have an account? Sign Up</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: 'center',
  },
  loginBox: {
    width: '90%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#555',
  },
});