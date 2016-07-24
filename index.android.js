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
      <Image source={require('./background.png')} style={styles.container}>
        <View style={ styles.center }>
          <Text style={ styles.heading }>Stack Salaries</Text>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            placeholder="MongoDB, Express, React, Node.js"
            placeholderTextColor='white'
            underlineColorAndroid='white'
          />
        </View>
        <View style = {styles.search}>
          <TextInput
            style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            placeholder="San Francisco, CA"
            placeholderTextColor='white'
            underlineColorAndroid='white'
          />
        </View>
        <View style={styles.center}>
          <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Salary"}) }>
            <Text style={ styles.buttonText }>Search!</Text>
          </TouchableHighlight>
        </View>
      </Image>
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
      <Image source={require('./background.png')} style={styles.container}>
      <Text style={styles.dataHead}>Salaries for React in New York, NY</Text>
        <BarChart
          dataSets={data}
          graduation={25}
          horizontal={false}
          showGrid={false}
          barSpacing={5}
          style={styles.chart}
        />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.salaryLabel2}>85k</Text>
        <Text style={styles.salaryLabel2}>106k</Text>
        <Text style={styles.salaryLabel2}>140k</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.salaryLabel}>Lowest</Text>
        <Text style={styles.salaryLabel}>Average</Text>
        <Text style={styles.salaryLabel}>Highest</Text>
      </View>
      <View style={ styles.center }>
        <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.push({name: "Main"}) }>
          <Text style={ styles.buttonText }>Go Home</Text>
        </TouchableHighlight>
      </View>
      </Image>
    )
  }
}

AppRegistry.registerComponent('stackSalaries', () => stackSalaries);
