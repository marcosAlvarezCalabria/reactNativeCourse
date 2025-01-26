import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, View } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [showForm, setShowForm] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {/* Renderizado condicional del formulario */}
      {showForm ? (
        <View>
          <Text style={styles.headerText}>Welcome to Little Lemon</Text>
          <Text style={styles.regularText}>Login to continue</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder="password"
            secureTextEntry={true}
          />

          <Pressable
            style={styles.button}
            onPress={() => {
              setShowForm(false); // Cambia el estado a false para ocultar el formulario
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      ) : (
        // Contenido mostrado después del login
        <Text style={styles.successMessage}>You are logged iiiin!</Text>
      )}
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    padding: 20,
    marginHorizontal: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  successMessage: {
    fontSize: 24,
    marginTop: 50,
    textAlign: 'center',
    color: '#4CAF50',
  },
});


