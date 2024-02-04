import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyHeader from '../../components/MyHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListNav from '../ListNav';
import SettingsScreen from '../../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, color, size, route) => {
  let iconName = focused
    ? route.name === 'list'
      ? 'list'
      : 'settings'
    : route.name === 'list'
    ? 'list-outline'
    : 'settings-outline';
  return <Ionicons name={iconName} size={size} color={color} />;
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcon(focused, color, size, route),
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'list'} component={ListNav} />
      <Tab.Screen name={'settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabScreen;
