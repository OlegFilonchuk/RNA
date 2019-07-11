import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav/nav'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
      <View>
        <Text>{'string'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
