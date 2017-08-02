/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import UIStepper from 'react-native-ui-stepper';

export default class test extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  updateCounter = counter => {
    this.setState({
      counter,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.state.counter}</Text>
        <View style={styles.stepperContainer}>
          <UIStepper
            onValueChange={(value) => { this.updateCounter(value) }}
            maximumValue={10}
            wraps={true}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperContainer: {
    borderWidth: 1,
    flex: 1,
  }
});

AppRegistry.registerComponent('test', () => test);
