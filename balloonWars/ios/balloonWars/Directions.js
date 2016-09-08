import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Directions extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is Andrew.</Text>
      </View>
    )
  }
}
