import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 40,
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
  },
});
