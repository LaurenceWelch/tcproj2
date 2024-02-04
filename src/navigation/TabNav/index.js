import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyHeader from '../../components/MyHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListNav from '../ListNav';

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = focused
            ? route.name === 'list'
              ? 'list'
              : 'settings'
            : route.name === 'list'
            ? 'list-outline'
            : 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'list'} component={ListNav} />
      <Tab.Screen name={'settings'} component={MyHeader} />
    </Tab.Navigator>
  );
};

export default TabScreen;
