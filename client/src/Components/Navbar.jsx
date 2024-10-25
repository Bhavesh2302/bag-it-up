// Navbar.js
import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUserCircle, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-teal-500 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://i.imgur.com/8SSRICl.png" alt="Logo" className="w-10 h-10" />
          <span className="text-rose-500 -xl  font-bold">Bag It up</span>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons and Auth Section */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-gray-600 cursor-pointer hidden md:block" size={24} />
          <FaHeart className="text-gray-600 cursor-pointer hidden md:block" size={24} />

          {/* Auth */}
          {isAuthenticated ? (
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer hidden md:block"
            />
          ) : (
            <button
              onClick={() => setIsAuthenticated(true)}
              className="text-gray-600 hover:text-gray-900 font-semibold hidden md:block"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Icon */}
          <FaBars
            className="text-gray-600 cursor-pointer md:hidden"
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

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
            {isAuthenticated ? (
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            ) : (
              <button
                onClick={() => setIsAuthenticated(true)}
                className="text-gray-600 hover:text-gray-900 font-semibold"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
