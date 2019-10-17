import Axios from 'axios';

export const getCategories = async () => {
  try {
    const result = await Axios.get('http://192.168.1.21:5000/api/v1/categories');
    return {
      type: 'GET_CATEGORIES',
      payload: result.data.data,
    };
  } catch (err) {
    console.log(err);
  }
};
