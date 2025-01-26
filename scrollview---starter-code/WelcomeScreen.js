import * as React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';  
import { StyleSheet } from 'react-native';

export default function WelcomeScreen() {
 
  return (
    <ScrollView indicatorStyle={'white'}  style={welcomeScreenStyle.container}>
      <Text
        style={welcomeScreenStyle.title}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={welcomeScreenStyle.text}>
        Little Ledddddddmon is a charmsingddhhhhddd lively but casual environment. We would love
        to hear more about your experience with us!
        
      </Text>
    </ScrollView>
  );
}
 const welcomeScreenStyle = StyleSheet.create({
  container:{
    flex: 1 
  },
  title : {
    padding: 40,
    fontSize: 50,
    color: '#EDEFEE',
    textAlign: 'center',

  },
  text : {
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',

  }
 })