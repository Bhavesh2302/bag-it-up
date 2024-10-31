import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBagData } from '../Redux/Reducers/bagReducer/action'
import { Link } from 'react-router-dom'
import Filter from '../Components/Filter'
import Navbar from '../Components/Navbar'

const Bag = () => {
const dispatch = useDispatch()
const {data} = useSelector((state)=>state.bag)
const { sort, brand, category, size } = useSelector((state) => state.filter);
console.log(sort,brand,category,size,"filters")

useEffect(() => {
  dispatch(getBagData({sort,brand,category,size,skip:0}));
}, [sort,brand,category,size]);
console.log(data)
  return (
    <div className='w-full flex gap-3 mt-[20px]'>
      <div className='w-1/4'>
      <Filter/>
      </div>
      <div className='w-3/4 lg:grid lg:grid-cols-3 lg:gap-4  md:grid md:grid-cols-2 md:gap-2'>
      {data && data.length>0 && data.map((item)=>(
        <div
        key={item?._id}
        className="lg:w-[250px] md:w-[200px] sm:w-[150px] border rounded-sm"
      >
          <div className="w-full lg:h-60 md:h-48 sm:h-44">
            <img
              src={item?.image_url_1}
              alt="image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="w-full h-auto p-2 text-left font-semibold text-sm">
            <div className="lg:text-base md:text-sm sm:text-xs">
              {item.title}
            </div>
            <div className="text-[#969491]">{item.brand}</div>
            
          </div>
          <div className='flex justify-between gap-3'>
          <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
              &#8377; {item.discounted_price}
            </p>
          <div></div>  
          </div>

      </div>
    
      )) }
      </div>
    </div>
  )
}

export default Bag