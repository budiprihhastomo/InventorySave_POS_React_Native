const initialState = {
  isLoading: false,
  categoryLists: [],
};

const getCategories = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_CATEGORIES':
      return {...state, categoryLists: payload};
    default:
      return state;
  }
};

export default getCategories;
