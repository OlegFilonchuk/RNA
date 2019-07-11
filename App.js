import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav/nav'
import Generator from "./src/Generator/generator"

export default class App extends React.Component {

  state = {
    appName: 'My awesome app'
  }

  onAddRandom = () => {
    alert('add random')
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav appName={this.state.appName}/>
        <Text>{'some text just for fun'}</Text>
        <Generator add={this.onAddRandom}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
