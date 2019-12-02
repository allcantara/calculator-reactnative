import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default props => {

  let stylesButtons = [];
  stylesButtons.push(styles.button);

  if(props.double) stylesButtons.push(styles.buttonDouble);
  if(props.top) stylesButtons.push(styles.buttonTop);
  if(props.operation) stylesButtons.push(styles.operationButton);

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)} >
      <Text style={stylesButtons}>{props.label}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  
  button: {
    padding: 22,
    fontSize: 30,
    height: (Dimensions.get('window').width / 4),
    width: (Dimensions.get('window').width / 4),
    borderRadius: 50,
    backgroundColor: '#555',
    textAlign: 'center',
    borderWidth: 5,
    borderColor: '#121212',
    color: '#fff',
 },

 operationButton: {
   color: '#fff',
   backgroundColor: '#fa8231',
 },

 buttonDouble: {
   width: (Dimensions.get('window').width / 4) * 2,
 },
 
 buttonTop: {
    backgroundColor: '#777',
 }

})
