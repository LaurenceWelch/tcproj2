import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';
import LoginApi from '../../helpers/LoginApi';
import ErrorText from '../../components/ErrorText';
import {useUserContext} from '../../Context/UserContext';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  // callbacks
  const changeUsername = useCallback(ct => setUsername(ct), []);
  const changePassword = useCallback(ct => setPassword(ct), []);

  const userContext = useUserContext();

  console.log('render Login Screen');
  return (
    <View style={styles.main}>
      <MyInput
        val={username}
        placeholder={'username'}
        onChange={changeUsername}
      />
      <MyInput
        val={password}
        placeholder={'password'}
        onChange={changePassword}
        secureTextEntry={true}
      />
      {warning !== '' && <ErrorText val={warning} />}
      <MyButton
        title={'submit'}
        submit={() => {
          console.log(username, password);
          setWarning('');
          LoginApi.login(username, password)
            .then(data => userContext.login({name: username}))
            .catch(err => setWarning(err));
        }}
      />
    </View>
  );
};

export default LoginScreen;
