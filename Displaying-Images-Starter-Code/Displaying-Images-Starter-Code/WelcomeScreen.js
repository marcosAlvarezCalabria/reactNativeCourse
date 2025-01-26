import * as React from 'react';
import { ScrollView, Text, StyleSheet, Image, View, useColorScheme } from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <ScrollView
    indicatorStyle={colorScheme === 'light' ? 'black' : 'white'} // Asegúrate de usar valores soportados
    style={[
      styles.container,
      colorScheme === 'light'
        ? { backgroundColor: '#333333' }
        : { backgroundColor: '#34eb86' },
    ]}
  >
    <View style={styles.headerWrapper}>
      <Image
        style={styles.image}
        source={require('./img/logo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
    <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    <Text style={styles.regularText}>
      Little Lemon is a charming neighborhood bistro that serves simple food
      and classic cocktails in a lively but casual environment. We would love
      to hear more about your experience with us!
    </Text>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
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
  image: {
   
    width: 100,
    height: 100,
    borderRadius: 20,
  }
});
