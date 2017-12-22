import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking, Button } from 'react-native';
import UIStepper from './UIStepper';

import Container from '../components/Container';
import Header from '../components/Header';
import Item from '../components/Item';

class MainPage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ value: this.state.value + 1 });
    }, 1500);
  }
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <Header text="Welcome to react-native-ui-stepper" />
          <Item>
            <UIStepper />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>Basic usage</Text>
          </Item>
          <Item>
            <UIStepper displayValue />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Display stepper value
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              tintColor="red"
              textColor="red"
              borderColor="red"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Custom colors
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              tintColor="red"
              textColor="red"
              borderColor="red"
              fontFamily="Bungee-Regular"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Custom Font Family
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              tintColor="rebeccapurple"
              textColor="orange"
              borderColor="green"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Custom colors (all different)
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              tintColor="orange"
              textColor="orange"
              borderColor="orange"
              fontSize={25}
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Custom colors (all the same), large font
            </Text>
          </Item>
          <Item>
            <UIStepper
              borderRadius={100}
              backgroundColor="yellow"
              borderWidth={2}
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Rounded off corners
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              borderColor="rebeccapurple"
              borderWidth={2}
              tintColor="rebeccapurple"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Recolor images
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              borderColor="rebeccapurple"
              borderWidth={2}
              tintColor="rebeccapurple"
              decrementImage="https://placehold.it/50x50"
              incrementImage="https://placehold.it/50x50"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Custom images
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              borderColor="transparent"
              tintColor="rebeccapurple"
              decrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_2-128.png"
              incrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              This uses two images from Iconfinder, loaded over the Internet
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              borderColor="transparent"
              textColor="rebeccapurple"
              overrideTintColor
              tintColor="rebeccapurple"
              decrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_2-128.png"
              incrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              This uses SAME two images as the above, from Iconfinder, loaded
              over the Internet
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              borderColor="transparent"
              textColor="rebeccapurple"
              overrideTintColor
              tintColor="rebeccapurple"
              incrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Mixture of a local and network image
            </Text>
          </Item>
          <Item>
            <UIStepper vertical displayValue />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Basic usage - vertical (Just add a 'vertical' prop)
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              vertical
              borderColor="transparent"
              textColor="rebeccapurple"
              overrideTintColor
              tintColor="rebeccapurple"
              decrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_2-128.png"
              incrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Mixture of a local and network image
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              vertical
              displayDecrementFirst
              borderColor="transparent"
              textColor="rebeccapurple"
              overrideTintColor
              tintColor="rebeccapurple"
              decrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_2-128.png"
              incrementImage="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Display the decrement button above the increment
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              innerRef={stepper => {
                this.stepper = stepper;
              }}
            />
            <Button
              title="Increment"
              onPress={() => {
                this.stepper.increment();
              }}
            />
            <Button
              title="Decrement"
              onPress={() => {
                this.stepper.decrement();
              }}
            />
            <Button
              title="Reset"
              onPress={() => {
                this.stepper.resetValue();
              }}
            />
            <Button
              title="Set value to 50"
              onPress={() => {
                this.stepper.setValue(50);
              }}
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Use the innerRef prop to gain access to class-based methods
            </Text>
          </Item>
          <Item>
            <UIStepper
              displayValue
              initialValue={0}
              value={this.state.value}
              onIncrement={this.increment}
              onDecrement={this.decrement}
            />
            <Text style={{ marginTop: 10, marginBottom: 10 }}>
              Use a state variable to update the UIStepper
            </Text>
          </Item>
        </Container>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'transparent',
            position: 'absolute',
            bottom: 10,
            left: 10,
            padding: 10,
            borderRadius: 3,
            backgroundColor: '#428bca',
          }}
          onPress={() => {
            Linking.openURL(
              'https://github.com/hannigand/react-native-ui-stepper/blob/master/README.md#props',
            );
          }}
        >
          <Text style={{ color: '#FFF' }}>See All Props</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainPage;
