import {
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
} from "./actionTypes";

const initState = {
  isAdminAuth: false,
  isUserAuth : false,
  token: null,
  isLoading: false,
  isError: false,
  userData: {},
};

export const adminAuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading:false,
        userData : payload,

      };
    }

    case ADMIN_LOGIN_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading:false
        };
      }

      default : return state
      
  }
};
