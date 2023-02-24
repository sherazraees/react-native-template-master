const initialState = {
  isloading: false,
  loaded: false,
  data: null,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default user;
