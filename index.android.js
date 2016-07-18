import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

var styles = require('./styles');

class stackSalaries extends Component {

  renderScene(route, navigator){
    if(route.name === 'Main'){
      return <Main navigator={navigator} {...route.passProps} />
    }
    if(route.name == 'Salary') {
      return <Salary navigator={navigator} {...route.passProps} />
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Main' }}
        renderScene={ this.renderScene } />
    )
  }
}

class Main extends Component {

  _navigate(name) {
    this.props.navigator.push({
      name: 'Salary',
      passProps: {
        name: name
      }
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Welcome to Stack Shots!</Text>
        <Text style={ styles.instructions }>An app for software engineers to post anonymous salary info based on their stack and location with optional filters based on criteria such as educational background, age, years of experience.</Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Salary"}) }>
          <Text style={ styles.buttonText }>Search!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

class Salary extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Hello from { this.props.name }</Text>
        <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Main"}) }>
          <Text style={ styles.buttonText }>GO HOME</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

AppRegistry.registerComponent('stackSalaries', () => stackSalaries);
