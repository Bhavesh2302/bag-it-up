import {
GET_BAG_FAILURE, GET_BAG_REQUEST, GET_BAG_SUCCESS
  } from "./actionTypes";
  
  import axios from "axios";
  
  export const getBagData = () => (dispatch) => {
    dispatch({ type: GET_BAG_REQUEST });
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/signup`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
          return dispatch({ type: GET_BAG_SUCCESS, data:res.data });
        })
        .catch((err) => {
          return dispatch({ type: GET_BAG_FAILURE });
        })
  };
  
