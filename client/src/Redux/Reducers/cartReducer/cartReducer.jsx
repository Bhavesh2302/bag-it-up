import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  PATCH_CART_FAILURE,
  PATCH_CART_REQUEST,
  PATCH_CART_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  cartData: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
  
    case DELETE_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TO_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
   
    case DELETE_CART_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: [...state.cart, payload],
        isError: false,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
        isError: false,
      };
    }
    
    
    default:
      return state;
  }
};
