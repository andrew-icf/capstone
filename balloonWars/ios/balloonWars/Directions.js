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

const Directions = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi! My name is Andrew.{this.props.myElement}</Text>
        <TouchableHighlight style={styles.button}>
        <Text style={styles.text}>GO TO WAR!</Text>
        </TouchableHighlight>
      </View>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(233,100%,16%)'
  },
  text: {
    fontSize: 18,
    color: 'blue'
  }
});

module.exports = Directions;
