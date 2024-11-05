import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBagData } from "../Redux/Reducers/bagReducer/action";
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";

const Bag = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.bag);
  const { sort, brand, category, size } = useSelector((state) => state.filter);
  console.log(sort, brand, category, size, "filters");

  useEffect(() => {
    dispatch(getBagData({ sort, brand, category, size, skip: 0 }));
  }, [sort, brand, category, size]);
  console.log(data);

  return (
    <div className="w-full flex gap-3 mt-[20px]">
      <div className="sm :w-1/2  md:w-1/4 lg:w-1/4">
        <Filter />
      </div>
      <div className="sm:w-1/2 md:w-3/4 lg:w-3/4 lg:grid lg:grid-cols-3 gap-y-3 gap-4 m-auto md:grid md:grid-cols-2 p-10 sm:grid-cols-1">
      {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item?._id}
              className="lg:w-[250px] md:w-[200px] sm:w-[150px] border rounded-sm mt-6"
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
              <div className="flex justify-evenly gap-3 mt-1">
                <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1).toLowerCase()}
                </p>
                <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                  {item.size}
                </p>
                <div
                  className="w-6 h-6 rounded-full lg:w-5 lg:h-5 md:w-4 md:h-4 sm:w-3 sm:h-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div></div>
              </div>

              <div className="flex flex-start justify-around gap-3 mt-2">
                <p className="font-semibold lg:text-sm md:text-xs sm:text-xs text-decoration-line: line-through">
                  &#8377; {item.actual_price}
                </p>
                <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                  {item.discount}
                </p>
                <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                  &#8377; {item.discounted_price}
                </p>
              </div>
              <div className="flex justify-around mt-2">
                <button className="bg-gray-500 text-white sm:text-sm rounded-lg hover:bg-gray-600 lg:px-3 lg:py-1 md:px-2 md:py-1 sm:px-[6px] sm:py-[2px]">
                  Wishlist
                </button>
                <button className="bg-gray-500 text-white sm:text-sm rounded-lg hover:bg-gray-600 lg:px-3 lg:py-1 md:px-2 md:py-1 sm:px-[6px] sm:py-[2px]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bag;
