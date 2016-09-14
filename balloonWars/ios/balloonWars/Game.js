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

const Dimensions = require('Dimensions');
const {
  width,
  height
} = Dimensions.get('window');
const HighScore = require('./HighScore');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: new Animated.Value(80),
      Radius: new Animated.Value(40),
      pan: new Animated.ValueXY()
    };
  }
  _getStyle() {
    return [
      styles.circle,
      {
        transform: this.state.pan.getTranslateTransform()
      }
    ];
  }
  _reload(){
    this.props.navigator.pop();
  }
  _onHighScore(){
    this.props.navigator.push({
      title: 'How\'d you do?',
      component: HighScore,
      passProps: {score: 0}
    });
  }
  render() {
    const { size, Radius } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>SCORE {this.props.score}</Text>
        <Animated.View style={[styles.circle, {
          height: size,
          width: size,
          borderRadius: Radius
        }, this._getStyle()]}

        />
        <TouchableHighlight style={styles.button} onPress={() => this._reload()}>
          <Text style={styles.buttonText}>Play Again!</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this._onHighScore()}>
          <Text style={styles.buttonText}>Checkout your score</Text>
        </TouchableHighlight>
      </View>
    );
  }
  componentWillMount() {
    const { size, Radius, pan } = this.state;
    const num = 120;
    Animated.timing(
      size, {
        toValue: num,
        friction: 1,
      }
    ).start();

    Animated.timing(
      Radius, {
        toValue: size.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),

      }
    ).start();

    Animated.spring(
      pan, {
      toValue: {x:100, y: 50},
      tension: 2,
      friction: 2
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
    backgroundColor: 'skyblue',
    borderRadius: 50
  }
});

module.exports = Game;