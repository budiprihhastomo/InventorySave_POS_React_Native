const initialState = {
  isLoading: false,
  productLists: [],
};

const getProducts = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_PRODUCTS':
      return {...state, productLists: payload};
    default:
      return state;
  }
};

export default getProducts;
