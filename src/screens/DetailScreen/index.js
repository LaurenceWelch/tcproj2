import {View, Text, TextInput, Button} from 'react-native';
import React, {memo, useState, useEffect, useMemo} from 'react';

function fun(arr) {
  console.log('fun ran');
  return arr.filter(val => val % 2 === 0);
}

const Com1 = props => {
  const [text, setText] = useState(props.val);

  const filtered = useMemo(() => fun(props.val), [props.val]);

  console.log('c1 render');
  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text>{filtered.toString()}</Text>
      <TextInput val={text} onChangeText={val => setText(val)} />
    </View>
  );
};

const DetailScreen = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  console.log('parent render');
  const [text, setText] = useState('');
  return (
    <View>
      <Button
        title={'pressme'}
        onPress={() => {
          setArr([...arr, arr.length + 1]);
          console.log(arr);
        }}
      />
      <TextInput
        val={text}
        onChangeText={val => {
          setText(val);
        }}
      />
      <Text>DetailScreen</Text>
      <Com1 val={arr} />
    </View>
  );
};

export default DetailScreen;
