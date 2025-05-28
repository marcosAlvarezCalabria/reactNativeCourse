import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Newsletter"
          onPress={() => navigation.navigate('Subscribe')}
          color="#00cc00"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default WelcomeScreen;
