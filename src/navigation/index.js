import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import TabScreen from '../screens/TabScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerScreen from '../screens/DrawerScreen';
import {UserContextProvider} from '../Context/UserContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(null);

  const login = userObj => setUser(userObj);
  const logout = () => setUser(null);

  const renderMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Details'} component={DetailScreen} />
        <Stack.Screen name={'Tabs'} component={TabScreen} />
        <Stack.Screen name={'Drawer'} component={DrawerScreen} />
      </Stack.Group>
    );
  };

  const renderAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name={'Login'} component={LoginScreen} />
      </Stack.Group>
    );
  };

  return (
    <UserContextProvider value={{user, login, logout}}>
      <Stack.Navigator>
        {user ? renderMainStack() : renderAuthStack()}
      </Stack.Navigator>
    </UserContextProvider>
  );
};

export default Navigation;
