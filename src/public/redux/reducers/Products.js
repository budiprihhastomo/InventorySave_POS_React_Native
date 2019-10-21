const initialState = {
  isLoading: false,
  productLists: [],
  productFilterLists: [],
  orderLists: [],
  totalPrice: 0,
};

export const getProducts = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_PRODUCTS':
      return {...state, productLists: payload};
    case 'GET_PRODUCTS_FILTER':
      return {...state, productFilterLists: payload};
    case 'DELETE_PRODUCTS_FILTER':
      return {...state, productFilterLists: []};
    default:
      return state;
  }
};

export const manageProducts = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_CART_ADD':
      return {
        orderLists: [...state.orderLists, payload],
      };
    case 'SET_CART_ADD_QTY':
      return {orderLists: payload};
    case 'SET_CART_MIN_QTY':
      return {orderLists: payload};
    case 'SET_CART_TOTAL_PRICE':
      return {...state, totalPrice: payload};
    case 'DEL_CART_PRODUCT':
      return {orderLists: payload};
    case 'DEL_CART_ALL_ORDER':
      return {orderLists: payload};
    default:
      return state;
  }
};
