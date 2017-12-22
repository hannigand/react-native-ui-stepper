import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class UIStepper extends Component {
  static propTypes = {
    initialValue: PropTypes.number,
    value: PropTypes.number,
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
    displayValue: PropTypes.bool,
    textColor: PropTypes.string,
    fontSize: PropTypes.number,
    overrideTintColor: PropTypes.bool,
    vertical: PropTypes.bool,
    displayDecrementFirst: PropTypes.bool,
    fontFamily: PropTypes.string,
    innerRef: PropTypes.func,
  };
  static defaultProps = {
    initialValue: 0,
    value: 0,
    minimumValue: 0,
    maximumValue: 100,
    steps: 1,
    tintColor: '#0076FF',
    backgroundColor: 'transparent',
    decrementImage: require('./assets/decrement.png'),
    incrementImage: require('./assets/increment.png'),
    imageWidth: 20,
    imageHeight: 15,
    width: 94,
    height: 29,
    borderColor: '#0076FF',
    borderWidth: 1,
    borderRadius: 4,
    onValueChange: null,
    onDecrement: null,
    onIncrement: null,
    onMinimumReached: null,
    onMaximumReached: null,
    wraps: false,
    displayValue: false,
    textColor: '#0076FF',
    fontSize: 15,
    overrideTintColor: false,
    vertical: false,
    displayDecrementFirst: false,
    fontFamily: 'System',
    innerRef: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
  }
  componentDidMount() {
    const { innerRef } = this.props;
    if (innerRef) {
      innerRef(this);
    }
  }
  componentWillUnmount() {
    const { innerRef } = this.props;
    if (innerRef) {
      innerRef(undefined);
    }
  }
  componentWillReceiveProps(nextProps) {
    const { value: currentValue } = this.props;
    const { value: nextValue } = nextProps;
    if (currentValue !== nextValue) {
      this.setState({
        value: nextValue,
      });
    }
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
  isExternalImage = image => typeof image === 'string';
  resolveImage = image => {
    if (this.isExternalImage(image)) {
      return { uri: image };
    }
    return image;
  };
  resolveStyles = image => {
    const {
      tintColor,
      height,
      width,
      overrideTintColor,
      imageHeight,
      imageWidth,
      buttonPadding,
    } = this.props;
    const containerHeight = height / 3;
    const containerWidth = width / 3;

    if (this.isExternalImage(image)) {
      const styles = {
        flex: 1,
        alignSelf: 'stretch',
        width: this.getImageWidth(),
        height: this.getImageHeight(),
        alignSelf: 'center',
      };
      if (overrideTintColor) {
        styles.tintColor = tintColor;
      }
      return styles;
    }
    return {
      tintColor,
      width: this.getImageWidth(),
      height: this.getImageHeight(),
    };
  };
  getImageHeight = () => {
    const { imageHeight, height } = this.props;
    const containerHeight = height;

    if (imageHeight > containerHeight) {
      return height;
    }
    return imageHeight;
  };
  getImageWidth = () => {
    const { imageWidth, width } = this.props;
    const containerWidth = width / 3;

    if (imageWidth > containerWidth) {
      return containerWidth;
    }
    return imageWidth;
  };
  validate = (value, callback) => {
    const {
      minimumValue: min,
      maximumValue: max,
      onValueChange,
      onMinimumReached,
      onMaximumReached,
      wraps,
    } = this.props;
    if (min <= value && max >= value) {
      this.setState({
        value
      });
      if (onValueChange) {
        onValueChange(value);
      }
      if (callback) {
        callback(value);
      }
      return;
    }
    if (value < min) {
      if (wraps) {
        this.setState({
          value: max,
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
          value: min,
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
    const { onValueChange } = this.props;
    this.setState({
      value: value,
    });
    if (onValueChange) {
      onValueChange(value);
    }
    if (callback) {
      callback(value);
    }
  };
  resetValue = () => {
    const { initialValue } = this.props;
    this.setState({
      value: initialValue,
    });
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
      displayValue,
      textColor,
      fontSize,
      vertical,
      displayDecrementFirst,
      fontFamily,
    } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor,
            width: vertical ? width / 2 : width,
            height: vertical ? 'auto' : height,
            borderColor,
            borderWidth,
            borderRadius,
            flexDirection: vertical
              ? displayDecrementFirst ? 'column' : 'column-reverse'
              : 'row',
          },
        ]}
      >
        <TouchableOpacity
          onPress={this.decrement}
          style={[
            styles.button,
            {
              borderRightWidth: vertical ? 0 : borderWidth,
              borderRightColor: borderColor,
              height: vertical ? 30 : 'auto',
            },
          ]}
        >
          <Image
            source={this.resolveImage(decrementImage)}
            style={this.resolveStyles(decrementImage)}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        {displayValue && (
          <View style={styles.valueContainer}>
            <Text style={{ color: textColor, fontSize, fontFamily }}>
              {this.state.value}
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={this.increment}
          style={[
            styles.button,
            {
              borderLeftWidth: vertical ? 0 : displayValue ? 1 : 0,
              borderColor,
              height: vertical ? 30 : 'auto',
            },
          ]}
        >
          <Image
            source={this.resolveImage(incrementImage)}
            style={this.resolveStyles(incrementImage)}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default UIStepper;
