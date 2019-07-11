import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Nav = () => (
  <View style={styles.nav}>
    <Text>My app</Text>
  </View>
)

const styles = StyleSheet.create({
  nav:{
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    color: 'blue',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',

  }
})

export default Nav