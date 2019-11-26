import React, { Component } from 'react';
import {View,Text} from 'react-native'

export default class LandingPage extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
          <Text>LandingPage</Text>
      </View>
    )
  }
}
