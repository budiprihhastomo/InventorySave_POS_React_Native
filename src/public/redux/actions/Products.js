import Axios from 'axios';
import {BACKEND_API_URL} from 'react-native-dotenv';

export const getProducts = async () => {
  try {
    const result = await Axios.get(`${BACKEND_API_URL}api/v1/products`);
    return {
      type: 'GET_PRODUCTS',
      payload: result.data.data.content,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByName = async filter => {
  try {
    const result = await Axios.get(
      `${BACKEND_API_URL}api/v1/products?s=${filter}`,
    );
    return {
      type: 'GET_PRODUCTS_FILTER',
      payload: result.data.data.content,
    };
  } catch (err) {
    console.log(err);
  }
};
