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
  NavigatorIOS
} from 'react-native';

let Directions = require('./ios/balloonWars/Directions');
let Index = require('./ios/balloonWars/Index');

class balloonWars extends Component {
  render() {
    return (
      <NavigatorIOS
        style={[
          styles.container,
          styles.welcome,
          styles.instructions,
          styles.button,
          styles.buttonText,
          styles.textLabel,
          styles.textEdit
        ]}
        initialRoute={{
          title: "Balloon Wars",
          component: Index
        }}/>
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

AppRegistry.registerComponent('balloonWars', () => balloonWars);
