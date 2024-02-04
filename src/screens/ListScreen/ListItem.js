import React from 'react';
import MyText from '../../components/MyText';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = ({val, navigation}) => {
  //console.log('item render');
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('detail', val)}>
      <View
        onLayout={data => {
          console.log(data);
        }}>
        <MyText numberOfLines={1}>title: {val.title}</MyText>
        <MyText>id: {val.id}</MyText>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  row: {
    borderBottomColor: '#aba',
    borderBottomWidth: 2,
    margin: 3,
    padding: 3,
  },
});
