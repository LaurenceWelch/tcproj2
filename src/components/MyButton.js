import React from 'react';
const {TouchableOpacity, Text, StyleSheet} = require('react-native');

const MyButton = props => {
  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : () => props.submit()}>
      <Text style={props.disabled ? styles.disabled : styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  text: {fontSize: 30, color: 'dodgerblue'},
  disabled: {fontSize: 30, color: 'lightgray'},
});
