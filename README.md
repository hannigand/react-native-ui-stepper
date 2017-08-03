# react-native-ui-stepper

[![npm version](https://img.shields.io/npm/v/react-native-ui-stepper.svg)](https://www.npmjs.com/package/react-native-ui-stepper)
[![npm version](https://img.shields.io/npm/dt/react-native-ui-stepper.svg)](https://img.shields.io/npm/dt/react-native-ui-stepper.svg)

A react-native component which mirrors the functionality of [UIStepper](https://developer.apple.com/reference/uikit/uistepper) from iOS.

> A stepper control provides a user interface for incrementing or decrementing a value. A stepper displays two buttons, one with a minus (“–”) symbol and one with a plus (“+”) symbol.

## Installation
`npm i react-native-ui-stepper`

## Usage
```javascript
import UIStepper from 'react-native-ui-stepper';
...
setValue = (value) => {
  // do something with value
}
render() {
  return (
      <UIStepper
        onValueChange={(value) => { this.setValue(value) }}
      />
  )
}
```

## Demo
![Demo example](http://g.recordit.co/ipvGlYfRpa.gif "Demo example")



## Props

| Name              | Type              | Description                                                                                 | Default     |
|-------------------|-------------------|---------------------------------------------------------------------------------------------|-------------|
| `initialValue`    | Number            | Start value                                                                                 | 0           |
| `minimumValue`    | Number            | Minimum value                                                                               | 0           |
| `maximumValue`    | Number            | Maximum value                                                                               | 100         |
| `steps`           | Number            | Increment value                                                                             | 1           |
| `tintColor`       | String            | Color used for images (-) and (+)                                                           | #0076FF     |
| `backgroundColor` | String            | Background color                                                                            | transparent |
| `width`           | Number            | Width                                                                                       | 94          |
| `height`          | Number            | Height                                                                                      | 29          |
| `borderColor`     | String            | Color used for the border                                                                   | #0076FF     |
| `borderWidth`     | Number            | Width of the border                                                                         | 1           |
| `borderRadius`    | Number            | Radius of the border                                                                        | 4           |
| `incrementImage`  | String or Number  | The image to be used on the Increment (+) button                                            | require('./assets/increment.png')           |
| `decrementImage`  | String or Number  | The image to be used on the Increment (-) button                                            | require('./assets/decrement.png')           |
| `onValueChange`   | Function          | Executed when the value changes. The value is passed as a parameter                         | null        |
| `onIncrement`     | Function          | Executed when the User clicks the increment (+) button. The value is passed as a parameter  | null        |
| `onDecrement`     | Function          | Executed when the User clicks the decrement (+) button. The value is passed as a parameter  | null        |
| `onMinimumReached` | Function | Executed when the `minimumValue` is reached. The value is passed as a parameter | null |
| `onMaximumReached` | Function | Executed when the `maximumValue` is reached. The value is passed as a parameter | null |
| `wraps`           | Boolean | When set to true, incrementing beyond the `maximumValue` will set the value to `minimumValue` and vice versa | false |
