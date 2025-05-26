import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SubscribeScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    console.log (name)
    if (name && email) {
      Alert.alert('Subscribed!', `Thank you, ${name}, for subscribing.`);
      window.alert('Subscribed!', `Thank you, ${name}, for subscribing.`);
    } else {
      Alert.alert('Missing info', 'Please enter both name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to our newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Subscribe"
          onPress={handleSubscribe}
          color="#00cc00"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#555',
    color: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default SubscribeScreen;
