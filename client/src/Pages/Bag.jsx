import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBagData } from "../Redux/Reducers/bagReducer/action";
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";
import StarRating from "../Components/StarRating";
import Drawer from "../Components/Drawer";

const Bag = () => {
  const dispatch = useDispatch();
  const { data, totalFilteredCount, totalLength } = useSelector(
    (state) => state.bag
  );
  const { sort, brand, category, size } = useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalItems = brand || category || size || sort ? totalFilteredCount : totalLength;
  const totalPages = Math.ceil(totalItems / itemsPerPage);


  const pages = []

  for(let i=0; i<totalPages; i++){
    pages.push(i+1)
  }

  useEffect(() => {
    dispatch(
      getBagData({
        sort,
        brand,
        category,
        size,
        skip: (currentPage - 1) * itemsPerPage,
        limit: itemsPerPage,
      })
    );
  }, [sort, brand, category, size, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full flex gap-3 mt-[20px]">
      {/* Filter Sidebar */}
      <div className=" sm:hidden md:block lg:block sm:w-1/2 md:w-1/4 lg:w-1/4">
        <Filter />
      </div>
      
      
   <div className="sm:w-full md:w-3/4 lg:w-3/4">
      {/* Bag Items */}
      <div className="md:hidden lg:hidden">
      <Drawer/>
      </div>
      <div className="w-full lg:grid lg:grid-cols-3 gap-y-3 gap-4 sm:m-auto md:m-auto lg:m-auto md:grid md:grid-cols-2 sm:grid-cols-1 items-center">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item?._id}
              className="lg:w-[300px] md:w-[250px] sm:w-[250px]  border rounded-sm sm:mt-4 lg:p-[12px] m-auto"
            >
              <Link to={`/single_bag/${item?._id}`}>
                <div className="w-full lg:h-[280px] md:h-[260px] sm:h-[250px] m-auto">
                  <img
                    src={item?.image_url_1}
                    alt="image"
                    className="w-full h-full object-fill transition-transform duration-500 hover:scale-105 block"
                  />
                </div>
                <div className="w-full h-auto p-2 text-left font-semibold text-sm">
                  <div className="lg:text-base md:text-sm sm:text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.title}
                  </div>
                  <div className="text-[#969491] lg:text-base md:text-sm sm:text-xs">
                    {item.brand}
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 text-left gap-3 mt-1">
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
                </div>
                <div className="flex flex-start items-center justify-around gap-3 mt-2 w-full text-left">
                  <div className="flex sm:w-3/4 md:w-1/2 lg:w-1/2 items-center justify-around gap-1">
                    <p className="font-semibold text-gray-500 lg:text-sm md:text-xs sm:text-xs line-through">
                      &#8377; {item.actual_price}
                    </p>
                    <p className="font-semibold lg:text-sm md:text-xs sm:text-xs">
                      &#8377; {item.discounted_price}
                    </p>
                  </div>
                  <div className="m-auto sm:w-1/2 md:w-1/2 lg:w-1/2 sm:gap-1 md:gap-1 lg:gap:1 flex items-center font-semibold lg:text-sm md:text-xs sm:text-xs md:p-1">
                    <p>{item.rating.toFixed(1)}</p>
                    <StarRating rating={item.rating} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center mt-4 gap-2">
        {pages?.map((item,index) => (
          <button
            key={item}
            onClick={() => handlePageChange(item)}
            className={`px-4 py-2 rounded ${
              currentPage === item
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Bag;
