import React from "react";
import ImageViewer from "./ImageViewer";
import ProductDescription from "./ProductDescription";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartData } from "../Redux/Reducers/cartReducer/action";
import { toast } from "react-toastify";
import { toaster } from "../utils/toastConfig";

const ProductOverview = ({ singleBag }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(singleBag?._id, token))
      .then((res) => {
        if (res.type === "ADD_TO_CART_SUCCESS") {
          toast.success("Item added to cart", toaster(1500));
          dispatch(getCartData(token))
        }else{
          toast.error("Something Went Wrong ", toaster(1500));
          navigate("/bag");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full sm:flex sm:flex-col   md:flex md:flex-col lg:flex lg:flex-row  gap-0  mt-5">
      <div className="lg:w-1/2">
        <ImageViewer bag={singleBag} />
      </div>
      <div className="md:w-3/4 lg:w-1/2  md:mt-[20px]">
        <div className="text-start text-[#646464] font-bold text-2xl mt-[10px]">
          {singleBag.title}
        </div>
        <div className="text-start text-[#969491] font-bold text-md mt-[10px]">
          {singleBag.brand}
        </div>
        <div className="text-start text-[#646464] font-bold text-md mt-[10px]">
          {singleBag?.category?.charAt(0).toUpperCase() +
            singleBag?.category?.slice(1).toLowerCase()}
        </div>
        <div className="mt-[10px]">
          {/* <StarRating rating={singleBag?.rating}/> */}
        </div>
        <div className="text-start text-[#646464] font-bold text-md mt-[10px]">
          &#8377; {singleBag.actual_price}
        </div>
        <div className="w-full flex flex-start">
          <button
            onClick={handleAddToCart}
            className="text-white rounded-[6px] h-10  hover:text-white font-semibold bg-customBlue w-40 text-[15px] mt-[10px]"
          >
            Add To Cart
          </button>
        </div>
        <div className="text-start mt-[10px]">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className='bg-white divide-y divide-gray-200"'>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                    Color
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {singleBag.color}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                    Category
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {singleBag.category}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                    Outer Material
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Synthetic
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                    Brand
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {singleBag.brand}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
