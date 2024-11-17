import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./actionTypes";

const initState = {
  // isUserAuth: false,
  // isAdminAuth: false,
  isAuth :false,
  token: null,
  isLoading: false,
  isError: false,
  userData: {},
};

export const userAuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        token:null,
        isAuth:false,
        userData:{}
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        token: payload.token,
        isAuth:true,
        // isUserAuth: payload?.role === "user",
        // isAdminAuth: payload?.role !== "user",
        userData: payload,
      };
    }

    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth:false,
        token:null,
        userData:{}
      };
    }

    case USER_LOGOUT:{
      return{
        ...state,
        isAuth : false,
        // isUserAuth:false,
        // isAdminAuth:false,
        token:null
      }
    }

    default:
      return state;
  }
};
