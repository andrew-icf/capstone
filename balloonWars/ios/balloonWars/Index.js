'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Navigator
} from 'react-native';


class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''

    };
  }
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Balloon Wars
          </Text>
          <Text style={styles.textLabel}>What's your name</Text>
            <TextInput style={styles.textEdit}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
          <TouchableHighlight style={styles.button} onPress={this.showAlert}>
            <Text style={styles.buttonText}>Let's Play</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(233,100%,16%)'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: -200,
    marginBottom: 60,
    color: 'hsl(128, 92%, 37%)',
    fontWeight: '900'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 22,
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    width: 255,
    justifyContent: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  textLabel: {
    color: 'hsl(128, 92%, 37%)',
    fontSize: 20
  },
  textEdit: {
    height: 40,
    width: 160,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 15
  },
});

module.exports = Index;
