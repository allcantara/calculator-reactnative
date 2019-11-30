import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props =>
  <View style={styles.display}>
    <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
  </View>

const styles  = StyleSheet.create({

  display: {
    flex: 1,
    padding: 22,
    justifyContent: 'flex-end',
    backgroundColor: '#212121',
    alignItems: 'flex-end',
  },

  displayValue: {
    fontSize: 60,
    color: '#fff',
  },

})