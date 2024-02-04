import {View, Text, TextInput, Button} from 'react-native';
import React, {memo, useState, useEffect, useMemo} from 'react';
import MyText from '../../components/MyText';
import styles from './styles';
import MyHeader from '../../components/MyHeader';

const DetailScreen = props => {
  console.log('detail render', props);
  const {id, userId, title, body} = props.route.params;
  return (
    <View style={styles.main}>
      <MyHeader>{title}</MyHeader>
      <View style={styles.ids}>
        <MyText>id: {id}</MyText>
        <MyText>userId: {userId}</MyText>
      </View>
      <MyText>{body}</MyText>
    </View>
  );
};

export default DetailScreen;
