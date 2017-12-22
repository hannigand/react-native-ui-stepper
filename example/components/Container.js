import React from 'react';
import { ScrollView } from 'react-native';

export default ({ children }) => (
  <ScrollView style={{ flex: 1, padding: 20, marginBottom: 50 }}>
    {children}
  </ScrollView>
);
