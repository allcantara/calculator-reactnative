import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

export default props => {

  let stylesButtons = [];
  stylesButtons.push(styles.container);

  if(props.double) stylesButtons.push(styles.containerDouble);
  if(props.top) stylesButtons.push(styles.containerTop);
  if(props.operation) stylesButtons.push(styles.containerOperator);

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)} >
      <View style={stylesButtons}>
        <Text style={styles.button} >{props.label}</Text>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({

  container: {
    width: (Dimensions.get('window').width / 4),
    height: (Dimensions.get('window').width / 4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 10,
    borderColor: '#000',
    backgroundColor: '#555',
  },

  containerOperator: {
    backgroundColor: '#fa8231',
  },

  containerDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  containerTop: {
    backgroundColor: '#777',
  },
  
  button: {
    fontSize: 30,
    color: '#fff',
  }

})
