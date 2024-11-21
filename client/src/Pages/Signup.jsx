import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userSignup } from "../Redux/Reducers/userAuthReducer/action";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toaster } from "../utils/toastConfig";
import { IoEyeOutline } from "react-icons/io5";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [showPassword, setShowPassword] = useState(false)
  const handleShowpassword = () =>{
    setShowPassword(!showPassword)
  }
  const handleSignup = (e) => {
    let { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      firstname: signupForm.firstname,
      lastname: signupForm.lastname,
      email: signupForm.email,
      password: signupForm.password,
      mobile: signupForm.mobile,
    };
    dispatch(userSignup(payload))
      .then((res) => {
        if (res?.type === "USER_SIGNUP_SUCCESS") {
          toast.success("Signup Sussessful!", toaster(1500));
          navigate("/login");
        } else
          toast.error(
            "Signup Fail! Please Try Again",
            toaster(1500)
          );
            })
      .catch((err) => {
        toast.error(
          "Signup Fail! Please Try Again",
          toaster(1500)
        );
        console.log(err);
      });
  };

  return (
    <div className="sm:w-full md:w-3/4 lg:w-2/3 m-auto">
      <div className="sm:w-full md:w-4/5 mt-4 p-4 m-auto shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
        <div className="w-full">
        {/* <img
            alt="bag_it_up"
            src="https://i.imgur.com/8SSRICl.png"
            className="w-16 h-16 m-auto"
          /> */}
          <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-800">
            Register to your account
          </h2>
        </div>

        <div className="sm:w-full md:w-4/5 m-auto">
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <div className="flex items-center justify-evenly mt-4 gap-3">
              <label
                htmlFor="firstname"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                First Name:
              </label>
              <div className="mt-2 w-3/4">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  autoComplete="firstname"
                  value={signupForm.firstname}
                  onChange={handleSignup}
                  className="flex items-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4 gap-3">
              <label
                htmlFor="lastname"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                Last Name:
              </label>
              <div className="mt-2 w-3/4">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required
                  autoComplete="lastname"
                  value={signupForm.lastname}
                  onChange={handleSignup}
                  className="flex items-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4 gap-3">
              <label
                htmlFor="mobile"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                Mobile No:
              </label>
              <div className="mt-2 w-3/4">
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  required
                  autoComplete="mobile"
                  value={signupForm.mobile}
                  onChange={handleSignup}
                  className="flex items-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4 gap-3">
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                Email Id:
              </label>
              <div className="mt-2 w-3/4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={signupForm.email}
                  onChange={handleSignup}
                  className="flex items-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-evenly"> */}
              {/* <div className="flex items-center justify-evenly mt-4 gap-3">
                <label
                  htmlFor="password"
                  className="text-md font-medium text-gray-800 w-1/4 flex items-center"
                >
                  Password:
                </label>
              <div className="mt-2 w-3/4 flex items-center gap-2">
              <div className="w-[90%]">
                <input
                  id="password"
                  name="password"
                  type={!!showPassword ? "text" : "password"}
                  value={signupForm.password}
                  onChange={handleSignup}
                  required
                  className="flex items-center w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <IoEyeOutline onClick = {handleShowpassword} />
                </div>
                
              </div>
            </div> */}
<div className="flex items-center justify-evenly mt-4 gap-3">
  <label
    htmlFor="password"
    className="text-md font-medium text-gray-800 w-1/4 flex items-center"
  >
    Password:
  </label>

  <div className="mt-2 w-3/4 relative">
    <input
      id="password"
      name="password"
      type={!!showPassword ? "text" : "password"}
      value={signupForm.password}
      onChange={handleSignup}
      required
      className="flex w-full rounded-md border-0 py-1.5 px-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    <IoEyeOutline
      onClick={handleShowpassword}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
    />
  </div>
</div>


            <div className="ml-[10px]">
              <button
                type="submit"
                className="flex w-1/2 justify-center m-auto mt-6 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
