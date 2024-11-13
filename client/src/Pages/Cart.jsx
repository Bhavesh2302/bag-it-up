import React from 'react'
import {useSelector} from 'react-redux'

const Cart = () => {
  const {cartData} = useSelector((state)=>state.cart)
  console.log(cartData)
  
  return (
    <div>Cart</div>
  )
}

export default Cart