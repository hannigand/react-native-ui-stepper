# react-native-ui-stepper

A react-native component which mirrors the functionality of [UIStepper](https://developer.apple.com/reference/uikit/uistepper) from iOS.

> A stepper control provides a user interface for incrementing or decrementing a value. A stepper displays two buttons, one with a minus (“–”) symbol and one with a plus (“+”) symbol.

## Installation

`npm i react-native-ui-stepper`

## Usage

```javascript
import Stepper from 'react-native-ui-stepper';

const MyCounter = () => {
  const renderItem = ({ count, increment, decrement }) => (
    <View>
      <Button title="Increment" onPress={increment}>
      <Text>{count}</Text>
      <Button title="Decrement" onPress={decrement}>
    </View>
  )

  return (
    <Stepper
      renderItem={this.renderItem}
    />
  )
}
```

View all supported Props [here](##props).

## Demo

## Props

| Name             | Type     | Description                                                                            | Default | Required |
| ---------------- | -------- | -------------------------------------------------------------------------------------- | ------- | -------- |
| initialValue     | Number   | Start value                                                                            | 0       | true     |
| minimumValue     | Number   | Minimum value                                                                          | 0       | false    |
| maximumValue     | Number   | Maximum value                                                                          | 0       | false    |
| steps            | Number   | Increment value                                                                        | 1       | false    |
| onValueChange    | Function | Executed when the value changes. The value is passed as a parameter                    | null    | false    |
| onIncrement      | Function | Executed when the User clicks the increment button. The value is passed as a parameter | null    | false    |
| onDecrement      | Function | Executed when the User clicks the decrement button. The value is passed as a parameter | null    | false    |
| onMinimumReached | Function | Executed when the minimumValue is reached. The value is passed as a parameter          | null    | false    |
| onMaximumReached | Function | Executed when the maximumValue is reached. The value is passed as a parameter          | null    | false    |
