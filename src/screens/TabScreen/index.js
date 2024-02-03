import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyHeader from '../../components/MyHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'list-outline';
          let iconName2 = 'information-circle-outline';

          // You can return any component that you like here!
          return <Ionicons name={'list-outline'} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'test1'} component={MyHeader} />
      <Tab.Screen name={'test2'} component={MyHeader} />
    </Tab.Navigator>
  );
};

export default TabScreen;
