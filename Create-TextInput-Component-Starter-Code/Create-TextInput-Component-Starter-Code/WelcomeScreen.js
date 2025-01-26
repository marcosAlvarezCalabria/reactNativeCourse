import { setStatusBarBackgroundColor } from 'expo-status-bar';
import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = React.useState('');
  const [secondName, onChangeSecondName] = React.useState('');
  const [message, onChangeMessage] = React.useState('');

  return (

    <ScrollView keyboardDismissMode='on-drag' indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <button>hola</button>
      <TextInput placeholder={'First name'} value={firstName} onChangeText={onChangeFirstName} style={styles.input} />
      <TextInput placeholder={'Second name'} value={secondName} onChangeText={onChangeSecondName} style={styles.input} />
      <TextInput multiline={true} placeholder={'Message'} value={message} onChangeText={onChangeMessage} style={styles.input} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14'
  }
});
