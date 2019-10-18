import Axios from 'axios';
import {BACKEND_API_URL} from 'react-native-dotenv';

export const authLogin = async data => {
  try {
    const result = await Axios.post(
      `${BACKEND_API_URL}api/v1/user/login`,
      data,
    );
    return {
      type: 'GET_AUTHENTICATION',
      payload: result.data,
    };
  } catch (err) {
    console.log(err);
  }
};
