import { ClickAwayListener } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaBars,
  FaSearch,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userLogout } from "../Redux/Reducers/userAuthReducer/action";
import { getBagData } from "../Redux/Reducers/bagReducer/action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { isAuth, token } = useSelector((state) => state.auth);
  const { sort, brand, category, size } = useSelector((state) => state.filter);
  let { data } = useSelector((state) => state.bag);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   const search = searchParams.get("search") || "";
  //   console.log(search);
  //   if (search) {
  //     setSearchTerm(search);
  //     // setSearchQuery(search);
  //   }
  // }, [searchParams]);

  const searchFunctionality = () => {
    // console.log(searchParams,"seacrchParams")
    dispatch(
      getBagData({
        search: searchTerm,
        sort,
        brand,
        category,
        size,
        skip: 0,
      })
    )
      .then((res) => {
        if (res.type == "GET_BAG_SUCCESS") {
          navigate("/bag", { state: { data: res.payload } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    navigate("/login");
    dispatch(userLogout());
  };

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    // setSearchParams(e.target.value)
  };
  console.log(searchTerm);

  const handleSearchBags = () => {
    // setSearchQuery(searchTerm);
    // setSearchParams({ search: searchTerm });
    searchFunctionality();
  };

  return (
    <nav className="relative w-full shadow-md">
      <div className="container lg:w-4/5 m-auto mx-auto py-2 flex items-center justify-between sm:w-full">
        <div className="flex items-center w-1/4 sm:w-1/5">
          <img
            src="/bag_images/BagItUp_Logo.png"
            alt="Logo"
            className="w-16 h-16 cursor-pointer"
            onClick={()=>navigate("/")}
          />
        </div>
        <div className="w-[35%] flex items-center justify-center sm:w-[40%]">
          <div className="w-full">
            <input
              type="text"
              name="searchTerm"
              value={searchTerm}
              onChange={handleSearchTerm}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-[5px] focus-visible:outline-none block w-full pl-2 h-10 sm:h-8 md:h-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="Search bags..."
            />
          </div>
          <button
            onClick={handleSearchBags}
            className="text-sm font-medium text-white bg-blue-700 rounded-r-[5px] h-10 w-10 sm:h-8 md:h-8 flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center justify-end gap-3 w-1/4">
          <FaShoppingCart
            onClick={() => navigate("/cart")}
            className="text-gray-600 cursor-pointer lg:block md:block"
            size={24}
          />
          {/* <FaHeart
            className="text-gray-600 cursor-pointer lg:block md:block"
            size={24}
          /> */}
          {isAuth && token ? (
            <div>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer sm:hidden"
              />
              <button
                className="text-white text-center rounded-[6px] h-10 max-w-fit px-5 hover:text-white font-semibold bg-customBlue sm:hidden md:block lg:block"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="text-white text-center rounded-[6px] h-10 max-w-fit px-5 hover:text-white font-semibold bg-customBlue sm:hidden md:block lg:block"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}

          <FaBars
            className="text-gray-600 cursor-pointer sm:block md:hidden relative"
            size={24}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
              <div className="md:hidden border bg-[#FFF] border-gray absolute right-[10px] top-16 z-[9999999999999999999999]">
                <div className="flex flex-col items-start px-4 py-2 space-y-2">
                  <button
                    className="flex items-center space-x-2 "
                    onClick={() => navigate("/cart")}
                  >
                    <FaShoppingCart className="text-gray-600" size={20} />
                    <span>Cart</span>
                  </button>
                  {/* <button className="flex items-center space-x-2">
                    <FaHeart className="text-gray-600" size={20} />
                    <span>Wishlist</span>
                  </button> */}
                  {isAuth && token ? (
                    <button className="text-gray-600 hover:text-gray-900 font-semibold" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <button
                      className="text-gray-600 hover:text-gray-900 font-semibold"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
