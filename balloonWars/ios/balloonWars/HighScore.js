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

const HighScore = React.createClass({
  popAll(){
    this.props.navigator.popToTop();
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SCORE: {this.props.score} POINTS</Text>
        <TouchableHighlight style={styles.button} onPress={() => this.popAll()}>
          <Text style={styles.buttonText}>HOME</Text>
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

module.exports = HighScore;
