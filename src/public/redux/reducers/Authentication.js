const initialState = {
  isLoading: false,
  userProfile: [],
};

const getProfile = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_AUTHENTICATION':
      return {...state, userProfile: payload.data};
    default:
      return state;
  }
};

export default getProfile;
