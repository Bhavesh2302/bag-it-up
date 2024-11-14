import React from "react";
import { FaBoxOpen } from "react-icons/fa6";

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px]">
      <FaBoxOpen className="text-5xl text-gray-400" />
      <div className="mt-2 text-lg font-semibold text-gray-600">No Result Found!</div>
    </div>
  );
};

export default NoData;