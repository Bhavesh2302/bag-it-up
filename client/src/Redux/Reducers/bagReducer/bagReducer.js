import { GET_BAG_FAILURE, GET_BAG_REQUEST, GET_BAG_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const bagReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BAG_REQUEST: {
        return {
          ...state,
          isError: false,
          isLoading: true,
        };
      }
      case GET_BAG_SUCCESS: {
        return {
          ...state,
          isError: false,
          isLoading: false,
          data:[...payload]
        };
      }
    case GET_BAG_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};