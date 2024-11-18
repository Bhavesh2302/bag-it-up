import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUEST, PATCH_CART_SUCCESS } from "./actionTypes";



export const getCartData = (token) =>(dispatch) =>{
    dispatch({type : GET_CART_REQUEST})
    return axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/cart/get`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },

    }).then((res)=>{
        return dispatch({type:GET_CART_SUCCESS, payload : res?.data?.cartData})
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
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },
    }).then((res)=>{
        return dispatch({type:ADD_TO_CART_SUCCESS, payload : res?.data})
    }).catch((err)=>{
        return dispatch({type:ADD_TO_CART_FAILURE})
    })

}


export const deleteItemFromCart = (cartID,token) =>(dispatch) =>{
    dispatch({type : DELETE_CART_REQUEST})
    return axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_BASE_URL}/cart/delete/${cartID}`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        },
    }).then((res)=>{
        return dispatch({type:DELETE_CART_SUCCESS})
    }).catch((err)=>{
        return dispatch({type:DELETE_CART_FAILURE})
    })

}

export const changeQuantity = (cartID,token,payload) =>(dispatch) =>{
    dispatch({type : PATCH_CART_REQUEST})
    return axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_BASE_URL}/cart/${cartID}`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`,
            // "Access-Control-Allow-Origin": "http://localhost:3000"
        },
        data: JSON.stringify(payload)
    }).then((res)=>{
        return dispatch({type:PATCH_CART_SUCCESS})
    }).catch((err)=>{
        return dispatch({type:PATCH_CART_FAILURE})
    })

}