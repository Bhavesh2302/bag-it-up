// Navbar.js
import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUserCircle, FaBars ,FaSearch} from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {isAuth,token} = useSelector((state)=>state.auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative w-full shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-evenly">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://i.imgur.com/8SSRICl.png" alt="Logo" className="w-12 h-12" />
          <span className="text-rose-500 -xl  font-bold">Bag It up</span>
        </div>

        {/* Search Bar - Hidden on small screens */}
        

<form className="flex items-center max-w-sm mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="w-full">
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search branch name..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <FaSearch/>
    </button>
</form>
<div className="flex items-center justify-evenly space-x-4">
  <div className="flex items-center justify-evenly space-x-4 ">
    {/* Cart Icon - Hidden on small screens */}
    <FaShoppingCart className="text-gray-600 cursor-pointer lg:block md:block" size={24} />
    
    {/* Wishlist Icon - Hidden on small screens */}
    <FaHeart className="text-gray-600 cursor-pointer lg:block md:block" size={24} />
  </div>
  
  {/* Auth */}
  {isAuth && token ? (
    <img
      src="https://via.placeholder.com/40"
      alt="User Avatar"
      className="w-10 h-10 rounded-full cursor-pointer sm:hidden"
    />
  ) : (
    <button
      className="text-white p-2 text-center rounded-[10px] hover:text-white font-semibold bg-customBlue sm:hidden"
    >
      Login
    </button>
  )}
  
  {/* Mobile Menu Icon - Only visible on small screens */}
  <FaBars
    className="text-gray-600 cursor-pointer sm:block md:hidden"
    size={24}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  />
  {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-white shadow-md">
    <div className="flex flex-col items-start px-4 py-2 space-y-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="flex items-center space-x-2">
        <FaShoppingCart className="text-gray-600" size={20} />
        <span>Cart</span>
      </button>
      <button className="flex items-center space-x-2">
        <FaHeart className="text-gray-600" size={20} />
        <span>Wishlist</span>
      </button>
      {isAuth ? (
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="text-gray-600 hover:text-gray-900 font-semibold"
        >
          Login
        </button>
      )}
    </div>
  </div>
)}
</div>



       </div>
    </nav>
  );
};

export default Navbar;
