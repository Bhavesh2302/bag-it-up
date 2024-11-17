import React, { useState } from "react";
import Filters from "./Filter";
import { MdOutlineCancel } from "react-icons/md";
import { MdCancel } from "react-icons/md";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-500 text-white rounded-[10px] p-3 focus:outline-none"
        onClick={toggleDrawer}
      >
        Filter
      </button>
      <div
        className={`fixed inset-0 bg-gray-200 backdrop-blur-sm flex justify-end transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-80 bg-white p-4 shadow-lg">
          <div className="flex justify-end items-center w-full">
            <MdOutlineCancel
              onClick={toggleDrawer}
              fontSize={26}
              className="cursor-pointer text-gray-500"
            />
          </div>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
