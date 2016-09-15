import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  NavigatorIOS,
  Animated,
} from 'react-native';


const HighScore = require('./HighScore');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panCircle: new Animated.ValueXY({x: 350, y: 0}),
      panSquare: new Animated.ValueXY({x: 0, y: 30}),
      panTriangle: new Animated.ValueXY({x: 0, y: 0}),
      score: 0
    };
  }

  _getCircle() {
    return [
      styles.circle,
      {
        transform: this.state.panCircle.getTranslateTransform()
      }
    ];
  }
  _getSquare() {
    return [
      styles.square,
      {
        transform: this.state.panSquare.getTranslateTransform()
      }
    ];
  }
  _getTriangle() {
    return [
      styles.triangle,
      {
        transform: this.state.panTriangle.getTranslateTransform()
      }
    ];
  }
  _bounce(){
    if (x > 350) {
      // go the other way
    }
    if (x < 0) {
      // go another way
    }
  }
  _reload(){
    this.props.navigator.pop();
  }
  _onHighScore(){
    let score = 0;
    score++;
    this.props.navigator.push({
      title: 'How\'d you do?',
      component: HighScore,
      passProps: {score: this.state.score}
    });
  }
  _addOne(){
    this.state.score++;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Animated.View style={[ styles.circle, this._getCircle() ]}/>
          <TouchableHighlight onPress={() => this._addOne()}>
            <Animated.View style={[ styles.square, this._getSquare() ]}/>
          </TouchableHighlight>
          <Animated.View style={[ styles.triangle, this._getTriangle() ]}/>
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this._reload()}>
          <Text style={styles.buttonText}>Play Again!</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this._onHighScore()}>
          <Text style={styles.buttonText}>Checkout your score</Text>
        </TouchableHighlight>
      </View>
    );
  }
  componentDidMount() {
    Animated.timing(
      this.state.panCircle, {
      toValue: { x: Math.floor(Math.random() * 350) + 1 , y: Math.floor(Math.random() * 250) + 1 },
      tension: 4,
      friction: 20
    }).start();
    Animated.timing(
      this.state.panSquare, {
      toValue: { x: Math.floor(Math.random() * 350) + 1 , y: Math.floor(Math.random() * 250) + 1 },
      tension: 4,
      friction: 20
    }).start();
    Animated.timing(
      this.state.panTriangle, {
      toValue: { x: Math.floor(Math.random() * 350) + 1 , y: Math.floor(Math.random() * 250) + 1 },
      tension: 4,
      friction: 20
    }).start();
  }
}


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
  box: {
    flex: 1,
    minWidth: 350,
    minHeight: 80,
    backgroundColor: 'hsl(261, 62%, 81%)'
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
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'hsl(128, 92%, 37%)',
    borderRadius: 50
  },
  square: {
    width: 45,
    height: 45,
    backgroundColor: 'red',
  },
  triangle: {
    width: 0,
       height: 0,
       backgroundColor: 'transparent',
       borderStyle: 'solid',
       borderTopWidth: 0,
       borderRightWidth: 25,
       borderBottomWidth: 50,
       borderLeftWidth: 25,
       borderTopColor: 'transparent',
       borderRightColor: 'transparent',
       borderBottomColor: 'yellow',
       borderLeftColor: 'transparent',
  }
});

module.exports = Game;
