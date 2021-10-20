import { LOAD_INITIAL_IMAGES } from "../constants";

const initialState = {
  loading: false,
  error: false,
  success: false,
  errorMessage: false,
  data: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INITIAL_IMAGES.LOADING:
      return { ...state, loading: true, error: false, success: false };
    case LOAD_INITIAL_IMAGES.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        data: action.payload,
      };
    case LOAD_INITIAL_IMAGES.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
