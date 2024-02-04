import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyHeader from '../../components/MyHeader';
import ListScreen from '../../screens/ListScreen';

const Stack = createNativeStackNavigator();

const ListItem = ({userId}) => {
  return (
    <View>
      <Text>{userId}</Text>
    </View>
  );
};
const DetailList = () => {
  return (
    <View>
      <Text>Dtails list</Text>
    </View>
  );
};

const ListNav = () => {
  return (
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen name={'Main'} component={ListScreen} />
      <Stack.Screen name={'Detail'} component={MyHeader} />
    </Stack.Navigator>
  );
};

const ListNav2 = () => {
  return (
    <View>
      <Text>what...</Text>
    </View>
  );
};

export default ListNav;
