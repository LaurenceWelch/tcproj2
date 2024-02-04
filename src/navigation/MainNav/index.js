import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import TabScreen from '../TabNav';
import LoginScreen from '../../screens/LoginScreen';
import {UserContextProvider} from '../../Context/UserContext';
import CreateUserScreen from '../../screens/CreateUserScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState({});

  const login = userObj => setUser(userObj);
  const logout = () => setUser(null);

  const renderMainStack = () => {
    return <TabScreen />;
  };

  const renderAuthStack = () => {
    return (
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={LoginScreen} />
        <Stack.Screen name={'Register'} component={CreateUserScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <UserContextProvider value={{user, login, logout}}>
      {user ? renderMainStack() : renderAuthStack()}
    </UserContextProvider>
  );
};

export default Navigation;
