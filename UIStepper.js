import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  valueContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class UIStepper extends Component {
  static propTypes = {
    initialValue: PropTypes.number,
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    steps: PropTypes.number,
    tintColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    decrementImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    incrementImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    onValueChange: PropTypes.func,
    onDecrement: PropTypes.func,
    onIncrement: PropTypes.func,
    onMinimumReached: PropTypes.func,
    onMaximumReached: PropTypes.func,
    wraps: PropTypes.bool,
    displayValue: PropTypes.bool
  };
  static defaultProps = {
    initialValue: 0,
    minimumValue: 0,
    maximumValue: 100,
    steps: 1,
    tintColor: "#0076FF",
    backgroundColor: "transparent",
    decrementImage: require("./assets/decrement.png"),
    incrementImage: require("./assets/increment.png"),
    imageWidth: 45,
    imageHeight: 27,
    width: 94,
    height: 29,
    borderColor: "#0076FF",
    borderWidth: 1,
    borderRadius: 4,
    onValueChange: null,
    onDecrement: null,
    onIncrement: null,
    onMinimumReached: null,
    onMaximumReached: null,
    wraps: false,
    displayValue: false
  };
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };
  }
  decrement = () => {
    const { steps, onDecrement } = this.props;
    let value = this.state.value;
    value -= steps;
    this.validate(value, onDecrement);
  };
  increment = () => {
    const { steps, onIncrement } = this.props;
    let value = this.state.value;
    value += steps;
    this.validate(value, onIncrement);
  };
  isExternalImage = image => typeof image === "string";
  resolveImage = image => {
    if (this.isExternalImage(image)) {
      return { uri: image };
    }
    return image;
  };
  resolveStyles = image => {
    const { tintColor, height, width } = this.props;
    if (this.isExternalImage(image)) {
      return {
        height: height - 10,
        width: width / 2 - 10
      };
    }
    return {
      tintColor
    };
  };
  validate = (value, callback) => {
    const {
      minimumValue: min,
      maximumValue: max,
      onValueChange,
      onMinimumReached,
      onMaximumReached,
      wraps
    } = this.props;
    if (min <= value && max >= value) {
      this.setValue(value);
      if (callback) {
        callback(value);
      }
    }
    if (value < min) {
      if (wraps) {
        this.setState({
          value: max
        });
        if (onValueChange) {
          onValueChange(max);
        }
        if (callback) {
          callback(max);
        }
        return;
      }
      onMinimumReached && onMinimumReached(value);
    }
    if (value > max) {
      if (wraps) {
        this.setState({
          value: min
        });
        if (onValueChange) {
          onValueChange(min);
        }
        if (callback) {
          callback(min);
        }
        return;
      }
      onMaximumReached && onMaximumReached(value);
    }
  };
  setValue = (value, callback) => {
    const { wraps, onValueChange } = this.props;
    if (wraps) {
      this.setState({
        value: value
      });
      if (onValueChange) {
        onValueChange(value);
      }
      if (callback) {
        callback(value);
      }
    }
  };
  render() {
    const {
      tintColor,
      backgroundColor,
      decrementImage,
      dividerImage,
      incrementImage,
      imageWidth,
      imageHeight,
      width,
      height,
      borderColor,
      borderWidth,
      borderRadius,
      displayValue
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            width,
            height,
            borderColor,
            borderWidth,
            borderRadius
          }
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.decrement();
          }}
          style={[
            styles.button,
            {
              borderRightWidth: borderWidth,
              borderRightColor: borderColor
            }
          ]}
        >
          <Image
            source={this.resolveImage(decrementImage)}
            style={[this.resolveStyles(decrementImage)]}
          />
        </TouchableOpacity>
        {displayValue &&
          <View style={styles.valueContainer}>
            <Text>{this.state.value}</Text>
          </View>}
        <TouchableOpacity
          onPress={() => {
            this.increment();
          }}
          style={[styles.button, {
            borderLeftWidth: displayValue ? 1 : 0,
            borderColor,
          }]}
        >
          <Image
            source={this.resolveImage(incrementImage)}
            style={[this.resolveStyles(incrementImage)]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default UIStepper;
