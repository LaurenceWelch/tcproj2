import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity, Button, Text} from 'react-native';
import DataApi from '../../helpers/DataApi';
import MyText from '../../components/MyText';
import ListItem from './ListItem';

const ListScreen = props => {
  const [data, setData] = useState([]);

  // get data
  useEffect(() => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  // render item for flatlist
  const renderFun = useCallback(
    ({item}) => {
      return <ListItem val={item} navigation={props.navigation} />;
    },
    [props.navigation],
  );

  // get key for flatlist
  const getKey = useCallback((val, index) => {
    return val.id;
  }, []);

  console.log('list render');
  return (
    <View>
      <FlatList data={data} renderItem={renderFun} keyExtractor={getKey} />
    </View>
  );
};

export default ListScreen;
