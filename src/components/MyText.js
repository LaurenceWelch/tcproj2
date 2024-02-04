import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';

const MyText = ({children}) => {
  console.log('render mytext');
  return <Text style={styles.text}>{children}</Text>;
};

export default memo(MyText);

const styles = StyleSheet.create({
  text: {fontSize: 18, margin: 4},
});
