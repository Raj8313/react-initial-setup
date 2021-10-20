import AxiosInstance from "../API/AxiosInstance";
import { LOAD_INITIAL_IMAGES } from "../constants";

const productMiddleware = (store) => (next) => async (action) => {
  const { dispatch } = store;
  next(action);
  switch (action.type) {
    case LOAD_INITIAL_IMAGES.REQUEST:
      {
        dispatch({ type: LOAD_INITIAL_IMAGES.LOADING });
      }

      try {
        const response = await AxiosInstance.get("/");
        dispatch({ type: LOAD_INITIAL_IMAGES.SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: LOAD_INITIAL_IMAGES.ERROR, payload: error.message });
      }

    default:
      break;
  }
};

export default productMiddleware;
