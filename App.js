import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';

import Display from './src/components/Display';
import Button from './src/components/Button';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {
  
  state = { ...initialState }

  addDigit = number => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    if(number === '.' && !clearDisplay && this.state.displayValue.includes('.')) return;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + number;
    this.setState({ displayValue, clearDisplay: false });

    if(number !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  }

  clearMemory = () => {
    this.setState({ ...initialState });
  }

  setOperation = operation => {
    if(operation === 'x') operation = '*';

    if(operation === '+/-') {
      let value = this.state.values;
      value[0] = value[0] * -1;
      this.setState({ displayValue: `${value[0]}`, values: value });
    }

    if(this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" top onClick={this.clearMemory} />
          <Button label="+/-" top onClick={this.setOperation} />
          <Button label="%" top onClick={this.setOperation} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="x" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit}/>
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingBottom: 0,
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
