import React from 'react';
import {View, TouchableOpacity, Button, Text} from 'react-native';

export default ({onPress, children}) => (
  <View style={{padding: 20, borderWidth: 1, marginTop: 10, marginBottom: 10}}>
   {children}
  </View>
)