import Axios from 'axios';

export const getProducts = async () => {
  try {
    const result = await Axios.get('http://192.168.1.21:5000/api/v1/products');
    return {
      type: 'GET_PRODUCTS',
      payload: result.data.data.content,
    };
  } catch (err) {
    console.log(err);
  }
};
