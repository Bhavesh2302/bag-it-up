import React, { useEffect, useMemo } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { changeQuantity, deleteItemFromCart, getCartData } from '../Redux/Reducers/cartReducer/action'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {

  const dispatch = useDispatch()
  const {cartData} = useSelector((state)=>state.cart)
  const {token} = useSelector((state)=>state.auth)
  console.log(cartData)

  useEffect(()=>{
  if(cartData.length === 0){
    dispatch(getCartData(token))
  }
  },[cartData.length])

  const Total = useMemo(()=>{
    let totalPrice =cartData?.reduce((acc,item)=> (acc + (item.price*item.qty)),0)
    return totalPrice
  },0)
  console.log(Total,"Total")
  const cartLength = useMemo(()=>{
    let cardDataLength =cartData?.reduce((acc,item) =>(acc + item.qty),0)
    return cardDataLength
  },0)

  const handleChangeQuantity = (id, Quantity,value) =>{
    const payload = {
      qty: Number(value)
    }

    token && dispatch(changeQuantity(id,token,payload)).then((res)=>{
      if(res.type === "PATCH_CART_SUCCESS"){
        dispatch(getCartData(token))
    }
    })
}
  const handleRemoveFromCart =(id) =>{
      token && dispatch(deleteItemFromCart(id,token))
  }
  
  return (
    <div className="w-full">    
    {/* Cart items */}
    <div className="mt-[10px]">
      {cartData.length === 0 && (
        <div className="w-1/2 mx-auto flex flex-col items-center">
          <img className="w-full h-96" src="/bag_images/empty_cart_image.png" alt="Empty Cart" />
          <p className="text-gray-500">
            Looks like you have not added anything to the cart. Go <br />
            ahead and <Link to="/bag" className='text-blue-500 underline'>Shop Bags</Link>
          </p>
        </div>
      )}
    </div>
  
    <div className="flex flex-col md:flex-col lg:flex-row m-auto w-full md:w-11/12 lg:w-4/5 gap-2 md:gap-4">
      <div className="w-4/5 sm:w-[90%] md:w-4/5 sm:m-auto md:m-auto lg:mt-[10px]">
        {cartData?.length > 0 &&
          cartData?.map((item) => (
            <div key={item._id} className="bg-white mb-2 border border-gray-300 p-2">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between md:gap-6">
                <div className='flex sm:flex-row md:flex-row gap-5'>
                <div className="w-52">
                  <img className="object-cover h-24" src={item.image_url} alt="cartPic" />
                </div>
  
                <div className="w-full text-center">
                  <p className="lg:font-semibold text-start text-sm md:text-sm text-gray-900">
                    {item.title}
                  </p>
                  <p className="font-semibold text-[#969491] text-start text-sm md:text-base">
                    {item.brand}
                  </p>
                  <p className="font-semibold text-start text-sm md:text-base text-gray-500">
                    {item?.category.charAt(0).toUpperCase() + item?.category.slice(1).toLowerCase() }
                  </p>
                  <p className="text-start font-normal text-[#969491] text-base mt-10px pb-1"> Price: <span className=''>₹ {item.price}</span></p>
                </div>
                </div>
                <div className="md:pl-4 flex sm:gap-2 md:gap-4 items-center">
                  <div className="flex items-center gap-4 w-full sm:w-1/2 md:w-full mx-auto">
                    <p className="font-medium text-base">Quantity:</p>
                    <button
                      className="text-sm font-bold px-2 py-1 border border-gray-300 disabled:opacity-50"
                      disabled={item.qty === 1}
                      onClick={() => handleChangeQuantity(item._id, item.qty, -1)}
                    >
                      -
                    </button>
                    <p className="font-medium text-sm px-1">{item.qty}</p>
                    <button
                      className="text-sm font-bold px-2 py-1 border border-gray-300"
                      onClick={() => handleChangeQuantity(item._id, item.qty, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="font-bold"
                      onClick={() => handleRemoveFromCart(item._id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
  
      {/* Total price box */}
      <div className={`w-4/5 sm:w-4/5 md:w-4/5 m-auto ${cartData.length === 0 ? "hidden" : "block"}`}>
        <div className="flex justify-between pt-5 mb-10 pl-5 items-center">
          <p className="text-sm font-semibold">Price ({cartLength} Items.)</p>
          <p className="text-sm font-semibold">₹ {Total}</p>
        </div>
        <div className="flex justify-between mt-2 mb-10 pl-5 items-center">
          <p className="text-sm font-semibold">Discount</p>
          <p className="text-sm font-semibold">0.00</p>
        </div>
        <div className="flex justify-between mt-2 mb-10 pl-5 items-center">
          <p className="text-sm font-semibold">Delivery Charges</p>
          <p className="text-sm font-semibold text-customBlue">Free</p>
        </div>
        <div className="flex justify-between pb-5 mt-2 mb-10 pl-5 items-center">
          <p className="text-lg font-semibold">Total Payable Amount</p>
          <p className="text-lg font-semibold">₹ {Total}</p>
        </div>
        <div className="flex justify-center pb-5 mt-2 mb-10 pl-5 items-center">
          <button
            className="text-xs sm:text-sm w-1/2 md:w-3/5 block mx-auto rounded-[6px]  bg-customBlue  text-white py-2"
            
          >
            Pay ₹ {Total}
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Cart