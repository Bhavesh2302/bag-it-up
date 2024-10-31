import {
GET_BAG_FAILURE, GET_BAG_REQUEST, GET_BAG_SUCCESS
  } from "./actionTypes";
  
  import axios from "axios";
  
  export const getBagData = (params) => (dispatch) => {
    dispatch({ type: GET_BAG_REQUEST });
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/bag/get`,
      params : params,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
        console.log(res,"getData")
          return dispatch({ type: GET_BAG_SUCCESS, payload:res.data.bagData });
        })
        .catch((err) => {
          return dispatch({ type: GET_BAG_FAILURE });
        })
  };
  
