import {
  USER_SIGNUP_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGOUT,
} from "./actionTypes";

import axios from "axios";


export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });
  return axios({
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/signup`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
        if (res.data.msg === "Signup Successfull") {
            return dispatch({ type: USER_SIGNUP_SUCCESS });
        } else return dispatch({type: USER_SIGNUP_FAILURE});
        
      })
      .catch((err) => {
        return dispatch({ type: USER_SIGNUP_FAILURE });
      })
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  return axios({
    method: "post",
    url: `${process.env.REACT_APP_BASE_URL}/login`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => {
    if (res.data.msg === "Login Successful") {
      return dispatch({ type: USER_LOGIN_SUCCESS ,payload:{token:res.data.token, user: res.data.userInfo}});
    } else return dispatch({ type: USER_LOGIN_FAILURE });
  })
  .catch((err) => {
    return dispatch({ type: USER_LOGIN_FAILURE });
  })
};

export const userLogout = ()=>(dispatch)=>{
dispatch({type :USER_LOGOUT})
}
