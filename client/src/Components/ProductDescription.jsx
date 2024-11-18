import React from "react";
import StarRating from "./StarRating";

const ProductDescription = ({ singleBag }) => {
  return (
    <div className="w-full ">
        <div className="text-start text-[#646464] font-bold text-2xl mt-[10px]">
          {singleBag.title}
        </div>
        <div className="text-start text-[#969491] font-bold text-md mt-[10px]">
          {singleBag?.brand?.charAt(0).toUpperCase() + singleBag?.brand?.slice(1).toLowerCase()}
      </div>
      <div className="text-start text-[#646464] font-bold text-md mt-[10px]">
       {singleBag?.category.charAt(0).toUpperCase() +  singleBag?.category.slice(1).toLowerCase()}
      </div>
    
      <div className="text-start text-[#646464] font-bold text-md mt-[10px]">
      &#8377;  {singleBag.actual_price}
      </div>
      <div className="w-full">
          <button className="text-white rounded-[6px]  hover:text-white font-semibold bg-customBlue w-40 text-[15px] mt-[10px]">Add To Cart</button>
      </div>
      <div className="text-start mt-[10px]">
      <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
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
  );
};

export default ProductDescription;
