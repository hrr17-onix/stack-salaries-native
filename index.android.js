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
import styles from './styles';
import { BarChart } from 'react-native-charts';


class stackSalaries extends Component {
  constructor(){
    super();
    this.state = {

    };
  }

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
        <View style={ styles.center }>
          <Text style={ styles.heading }>Stack Salaries</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            placeholder="MongoDB, Expres, React, Node.js"
          />
        </View>
        <View style = {styles.search}>
          <TextInput
            style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            placeholder="San Francisco, CA"
          />
        </View>
        <View style={styles.center}>
          <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Salary"}) }>
            <Text style={ styles.buttonText }>Search!</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

var data = [
  {
    fillColor: '#E6D141',
    data: [
      { value: 85 },
    ]
  },
  {
    fillColor: '#3386b9',
    data: [
      { value: 106 },
    ]
  },
  {
    fillColor: '#6DE64F',
    data: [
      { value: 140 },
    ]
  }
]

class Salary extends Component {
  render() {
    return (
      <View style={ styles.container }>
      <BarChart
          dataSets={data}
          graduation={25}
          horizontal={false}
          showGrid={false}
          barSpacing={5}
          style={{
            height: 300,
            margin: 15,
          }}/>
        <View style={ styles.center }>
          <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Main"}) }>
            <Text style={ styles.buttonText }>Go Home</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('stackSalaries', () => stackSalaries);
