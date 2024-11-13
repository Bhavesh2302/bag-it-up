import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUEST, PATCH_CART_SUCCESS } from "./actionTypes";
import { GET_BAG_FAILURE } from "../bagReducer/actionTypes";



export const getCartData = (token) =>(dispatch) =>{
    dispatch({type : GET_CART_REQUEST})
    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_URL}/cart/get`,
        headers:{
            'Content-Type':'appplication/json',
            'Authorization':`Bearer ${token}`
        },

    }).then((res)=>{
        return dispatch({type:GET_CART_SUCCESS, payload : res?.data})
    }).catch((err)=>{
        return dispatch({type:GET_CART_FAILURE})
    })

}

export const addToCart = (bagID,token) =>(dispatch) =>{
    dispatch({type : ADD_TO_CART_REQUEST})
    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_URL}/cart/add/${bagID}`,
        headers:{
            'Content-Type':'appplication/json',
            'Authorization':`Bearer ${token}`
        },
    }).then((res)=>{
        return dispatch({type:ADD_TO_CART_SUCCESS, payload : res?.data})
    }).catch((err)=>{
        return dispatch({type:ADD_TO_CART_FAILURE})
    })

}


export const deleteItemFromCart = (bagID,token) =>(dispatch) =>{
    dispatch({type : DELETE_CART_REQUEST})
    return axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_BASE_URL}/cart/delete/${bagID}`,
        headers:{
            'Content-Type':'appplication/json',
            'Authorization':`Bearer ${token}`
        },
    }).then((res)=>{
        return dispatch({type:DELETE_CART_SUCCESS, payload : res?.data})
    }).catch((err)=>{
        return dispatch({type:DELETE_CART_FAILURE})
    })

}

const changeQuantity = (bagID,token,payload) =>(dispatch) =>{
    dispatch({type : PATCH_CART_REQUEST})
    return axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_BASE_URL}/cart/${bagID}`,
        headers:{
            'Content-Type':'appplication/json',
            'Authorization':`Bearer ${token}`
        },
        data: { qty: payload }

    }).then((res)=>{
        return dispatch({type:PATCH_CART_SUCCESS, payload : res?.data})
    }).catch((err)=>{
        return dispatch({type:PATCH_CART_FAILURE})
    })

}