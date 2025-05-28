import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const SubscribeScreen = () => {
  const [name, setName] = useState('');

  const handleSubscribe = () => {
    Alert.alert('¡Gracias!', `Gracias por suscribirte, ${name}!`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.label}>Ingresa tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Suscribirse"
        onPress={handleSubscribe}
        disabled={name.trim() === ''}
        color="#00cc00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
});

export default SubscribeScreen;
