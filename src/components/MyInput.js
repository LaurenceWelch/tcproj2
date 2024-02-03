import {StyleSheet, TextInput} from 'react-native';
import React, {memo} from 'react';

const MyInput = props => {
  console.log('myinput render:', props.placeholder);
  return (
    <TextInput
      style={styles.input}
      val={props.val}
      placeholder={props.placeholder}
      onChangeText={val => props.onChange(val)}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
    />
  );
};

MyInput.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  secureTextEntry: false,
};

export default memo(MyInput);

const styles = StyleSheet.create({
  input: {fontSize: 20, margin: 10},
});
