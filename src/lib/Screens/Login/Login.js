import React, {useState, useEffect} from 'react';
import {ImageBackground, AsyncStorage} from 'react-native';
import {View, Icon, Button, Container, Item, Input, Text} from 'native-base';
import {styles} from './Login.style';

// Import : Actions
import {authLogin} from '../../../public/redux/actions/Authentication';
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedIn} from '../../../helper/Authentication';

const Login = props => {
  const [user_name, setUsername] = useState([]);
  const [user_password, setPassword] = useState([]);
  const data = {user_name, user_password};
  const dispatch = useDispatch();

  const getLoginInformation = async () => {
    const result = await isLoggedIn(props);
    dispatch(result);
  };

  useEffect(() => {
    getLoginInformation();
  }, []);

  const checkAuthentication = async () => {
    console.log(data);
    const result = await authLogin(data);
    if (result !== undefined) {
      dispatch(result);
      AsyncStorage.setItem('auth-token', result.payload.access_token);
      props.navigation.replace('Home');
    } else return alert('Invalid Credentials');
  };

  return (
    <Container>
      <View style={styles.loginHeader}>
        <ImageBackground
          source={require('../../../public/assets/background_login.jpg')}
          style={{width: '100%', height: 400}}
        />
      </View>
      <View style={styles.cardLogin}>
        <Text style={styles.titleText}>Welcome</Text>
        <View style={styles.inputGroup}>
          <Item style={styles.itemInput}>
            <Icon active name="ios-person" style={{color: '#7f8c8d'}} />
            <Input
              autoCapitalize="none"
              placeholder="Username"
              placeholderTextColor="#7f8c8d"
              style={styles.inputBox}
              onChangeText={val => setUsername(val)}
            />
          </Item>
          <Item style={styles.itemInput}>
            <Icon active name="ios-key" style={{color: '#7f8c8d'}} />
            <Input
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#7f8c8d"
              style={styles.inputBox}
              onChangeText={val => setPassword(val)}
            />
          </Item>
        </View>
        <View style={[styles.inputGroup, {marginTop: 30}]}>
          <Button
            style={[styles.buttonLogin, styles.buttonAction]}
            onPress={() => checkAuthentication()}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
          <Button style={[styles.buttonRegister, styles.buttonAction]}>
            <Text>Create Account</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Login;
