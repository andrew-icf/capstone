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

const Game = require('./Game');

const Directions = React.createClass({
  _onGame(){
    let score = 0;
    this.props.navigator.push({
      title: 'Balloon Wars',
      component: Game,
      passProps: {score: score}
    });
  },
  popOnce() {
    this.props.navigator.pop();
  },
  render() {
    // <Text style={styles.yellow}>YELLOW ballons are a bonus - shake your phone to increase your score</Text>
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hi {this.props.name} </Text>
        <Text style={styles.text}>How to play:</Text>
        <Text style={styles.red}>RED ballons gives you points</Text>
        <Text style={styles.green}>GREEN ballons takes points away</Text>
        <TouchableHighlight style={styles.button} onPress={() => this._onGame()}>
          <Text style={styles.buttonText}>Go to War!</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.popOnce()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(233,100%,16%)',
    paddingTop: 150,
    height: 170,
    width: 380,
    paddingLeft: 10,
  },
  header: {
    fontSize: 30,
    paddingBottom: 50,
    fontWeight: '700',
    color: 'hsl(128, 92%, 37%)'
  },
  text: {
    fontSize: 18,
    color: 'hsl(128, 92%, 37%)',
    textDecorationLine: 'underline',
    paddingBottom: 10
  },
  red: {
    fontSize: 18,
    color:'hsl(356, 86%, 58%)'
  },
  green: {
    fontSize: 18,
    color: 'hsl(128, 92%, 37%)'
  },
  yellow: {
    fontSize: 18,
    color:'hsl(59, 96%, 50%)'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    width: 255,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

module.exports = Directions;
