import Axios from 'axios';
import {BACKEND_API_URL} from 'react-native-dotenv';

export const getCategories = async () => {
  try {
    const result = await Axios.get(`${BACKEND_API_URL}api/v1/categories`);
    return {
      type: 'GET_CATEGORIES',
      payload: result.data.data,
    };
  } catch (err) {
    console.log(err);
  }
};
