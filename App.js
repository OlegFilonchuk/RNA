import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/Nav/nav'
import Generator from "./src/Generator/generator"
import ListItem from "./src/Generator/list-item"

export default class App extends React.Component {

  state = {
    appName: 'My awesome app',
    random: [20,13]
  }

  onAddRandom = () => {
    const random = Math.floor(Math.random()*100) + 1
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      }
    })
  }

  onItemDelete = (i) => {
    this.setState(prevState => {
      return {
        random: prevState.random.filter((item,index) => index !== i)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav appName={this.state.appName}/>
        <Text>{'some text just for fun'}</Text>
        <Generator add={this.onAddRandom}/>
        <ListItem items={this.state.random} delete={this.onItemDelete}/>
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
