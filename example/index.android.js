/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainPage from './pages/MainPage';

const Navigation = StackNavigator({
  Main: { screen: MainPage }
});

export default class example extends Component {
  render() {
    return <Navigation />;
  }
}

AppRegistry.registerComponent('example', () => example);
