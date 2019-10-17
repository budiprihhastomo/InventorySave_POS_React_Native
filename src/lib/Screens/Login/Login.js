import React from 'react';
import {ImageBackground} from 'react-native';
import {View, Icon, Button, Container, Item, Input, Text} from 'native-base';
import {styles} from './Login.style';

const Login = props => {
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
            <Icon active name="ios-mail" style={{color: '#7f8c8d'}} />
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email Address"
              placeholderTextColor="#7f8c8d"
              style={styles.inputBox}
            />
          </Item>
          <Item style={styles.itemInput}>
            <Icon active name="ios-key" style={{color: '#7f8c8d'}} />
            <Input
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#7f8c8d"
              style={styles.inputBox}
            />
          </Item>
        </View>
        <View style={[styles.inputGroup, {marginTop: 30}]}>
          <Button style={[styles.buttonLogin, styles.buttonAction]}>
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
