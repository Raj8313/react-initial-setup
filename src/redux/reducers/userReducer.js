const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: false,
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
