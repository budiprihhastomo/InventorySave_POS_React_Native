import {AsyncStorage} from 'react-native';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';

export const isLoggedIn = async props => {
  const authToken = await AsyncStorage.getItem('auth-token');
  const data = {
    payload: {
      data: jwt_decode(authToken),
    },
    type: 'GET_AUTHENTICATION',
  };
  if (authToken) props.navigation.replace('Home');
  return data;
};
