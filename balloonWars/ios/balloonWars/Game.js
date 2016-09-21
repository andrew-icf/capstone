import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  NavigatorIOS,
  Animated,
  Image,
  Vibration
} from 'react-native';


const HighScore = require('./HighScore');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panGreen: new Animated.ValueXY({x: 0, y: 0}),
      panGreen1: new Animated.ValueXY({x: 0, y: 0}),
      panGreen2: new Animated.ValueXY({x: 0, y: 0}),
      panGreen3: new Animated.ValueXY({x: 0, y: 0}),
      panGreen4: new Animated.ValueXY({x: 0, y: 0}),
      panRed: new Animated.ValueXY({x: 0, y: 0}),
      panBlue: new Animated.ValueXY({x: 0, y: 0}),
      panBlue1: new Animated.ValueXY({x: 0, y: 0}),
      score: 0,
      gameOver: false
    };
  }
transform(shapeName, shapeType = "circle"){
return [
  styles[shapeType],
    {
      transform: this.state[shapeName].getTranslateTransform()
    }
  ];
}
  _addOne(){
    this.state.score = this.state.score + 1; //++ wasn't working all the time
  }
  _minusOne(){
    this.state.score = this.state.score - 1; //-- wasn't working all the time
  }
  render() {
    return (
      <View style={styles.container}>
          <Animated.Image style={[ styles.image, this.transform("panBlue", "image") ]} source={require('../../images/blueBalloon.png')} />
          <TouchableHighlight onPress={() => this._minusOne()}>
            <Animated.Image style={[ styles.image, this.transform("panGreen", "image") ]} source={require('../../images/greenBalloon.png')} onPress={() => Vibration.vibrate()}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._minusOne()}>
            <Animated.Image style={[ styles.image, this.transform("panGreen1", "image") ]} source={require('../../images/greenBalloon.png')} onPress={() => Vibration.vibrate()}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._minusOne()}>
            <Animated.Image style={[ styles.image, this.transform("panGreen3", "image") ]} source={require('../../images/greenBalloon.png')} onPress={() => Vibration.vibrate()}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._addOne()}>
          <Animated.Image style={[ styles.image, this.transform("panRed", "image") ]} source={require('../../images/redBalloon.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._minusOne()}>
            <Animated.Image style={[ styles.image, this.transform("panGreen2", "image") ]} source={require('../../images/greenBalloon.png')} onPress={() => Vibration.vibrate()}/>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._minusOne()}>
            <Animated.Image style={[ styles.image, this.transform("panGreen4", "image") ]} source={require('../../images/greenBalloon.png')} onPress={() => Vibration.vibrate()}/>
          </TouchableHighlight>
          <Animated.Image style={[ styles.image, this.transform("panBlue1", "image") ]} source={require('../../images/blueBalloon.png')} />
      </View>
    );
  }

  timing(shapeName){
    let x = Math.floor(Math.random() * 310) + 0;
    let y = Math.floor(Math.random() * 90) + 0;
    return Animated.timing(
      this.state[shapeName], {
        toValue: { x: x, y: y },
        tension: 11,
        friction: 1,
      });
  }
  componentDidMount() {
    this.triggerAnimation();
    this.timed();
  }
  timed(){
    return setTimeout(() => this.setState({gameOver: true}), 10000);
  }
  triggerAnimation(){
    if(!this.state.gameOver) {
      Animated.parallel([
          this.timing("panGreen"),
          this.timing("panGreen1"),
          this.timing("panGreen2"),
          this.timing("panGreen3"),
          this.timing("panGreen4"),
          this.timing("panRed"),
          this.timing("panBlue"),
          this.timing("panBlue1")
      ])
      .start(this.triggerAnimation.bind(this));
    } else if (this.state.gameOver === true) {
      this.props.navigator.push({
        component: HighScore,
        passProps: { score: this.state.score }
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(233,100%,16%)',
    paddingTop: 100,
    height: 170,
    width: 380,
    paddingLeft: 10,
  },
  image: {
    width: 39,
    height: 50
  },
  box: {
    flex: 1,
    width: 350,
    backgroundColor: 'hsl(123, 72%, 8%)'
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
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    width: 255,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'hsl(128, 92%, 37%)',
    borderRadius: 50
  },
  square: {
    width: 50,
    height: 50,
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
