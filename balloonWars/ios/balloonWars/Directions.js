import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
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
        <Animatable.Text style={styles.header} animation="fadeInUp">Hi {this.props.name}</Animatable.Text>
        <Animatable.Text style={styles.text} animation="fadeInUp">How to play:</Animatable.Text>
        <Animatable.Text style={styles.red} animation="fadeInUp">* Click RED balloons to get points *</Animatable.Text>
        <Animatable.Text style={styles.tan} animation="fadeInUp">But be careful GREEN balloons take points away</Animatable.Text>
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
    color: 'hsl(0, 0%, 100%)'
  },
  text: {
    fontSize: 20,
    color: 'hsl(0, 0%, 100%)',
    paddingBottom: 10,
    fontWeight: '900'
  },
  red: {
    fontSize: 18,
    color:'hsl(356, 86%, 58%)'
  },
  tan: {
    fontSize: 18,
    color: 'hsl(0, 0%, 100%)'
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
