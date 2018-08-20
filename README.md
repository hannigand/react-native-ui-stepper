<div align="center">
<h1>react-native-ui-stepper</h1>

<p>A simple, cross-platform stepper component. Similar to <a href="https://developer.apple.com/documentation/uikit/uistepper">UIStepper</a> for iOS.</p>
</div>

<hr />

Welcome to a completely new re-write of the [react-native-ui-stepper](https://github.com/hannigand/react-native-ui-stepper) library. This version is **NOT** backwards capatiable, but it's more flexible and stable than the previous.

### Why?

Within a year of being published, this library has been downloaded more than [8500 times](https://npm-stat.com/charts.html?package=react-native-ui-stepper). The library included a very rigid API and lacked any quality control. Now, you have all of the control over what's being rendered, backed by a comprehensive test suite to give you reassurance.

### Usage

```diff
- import UIStepper from 'react-native-ui-stepper';
+ import Stepper from 'react-native-ui-stepper';
```

```javascript
<Stepper>
  {(onIncrement, onDecrement, text) => (
    <React.Fragment>
      <Button title="+" />
      <Text>{counter}</Text>
      <Button title="-" />
    </React.Fragment>
  )}
</Stepper>
```
