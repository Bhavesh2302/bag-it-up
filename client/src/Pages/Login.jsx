import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Reducers/userAuthReducer/action";
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { toaster } from "../utils/toastConfig";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state.auth);
  console.log(isAuth);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false)
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || "/";

  const handleLogin = (e) =>{
    let {name,value} = e.target;
    setLoginForm({
      ...loginForm,[name]:value
    })

    console.log(loginForm,"loginForm")

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      email: loginForm.email,
      password: loginForm.password,
    };
    dispatch(
      userLogin(payload))?.then((res) => {
        if (res?.type === "USER_LOGIN_SUCCESS") {
          toast.success("Login Sussessful!", toaster(1500));
          navigate("/");
        } else
          toast.error(
            "Login Fail! Please enter correct cridentials",
            toaster(1500)
          );
        console.log(res,"formResponse");
      })
      .catch((err) => {
        toast.error(
          "Login Fail! Please enter correct cridentials",
          toaster(1500)
        );
        console.log(err)
      })
  };

  return (
    <div className=" sm:w-[90%] md:w-4/5 lg:w-1/2 m-auto">
      <div className="sm:w-full mt-6 p-6 shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] ">
        <div className="w-full">
          <img
            alt="bag_it_up"
            src="https://i.imgur.com/8SSRICl.png"
            className="h-14 w-14 m-auto"
          />
          <h2 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-800">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:w-full md:w-4/5 m-auto">
          <form onSubmit={handleSubmit} className="w-full mt-4">
            <div className="flex items-center justify-between mt-4 gap-3">
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                Email: 
              </label>
              <div className="mt-2 sm:w-full md:w-4/5 lg:w-3/4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={loginForm.email}
                  onChange={handleLogin}
                  className="flex items-center sm:w-4/5 md:w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 gap-3">
              <label
                htmlFor="lastname"
                className="text-md font-medium text-gray-800 w-1/4 flex items-center"
              >
                Password:
              </label>
              <div className="mt-2 sm:w-full md:w-4/5 lg:w-3/4">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  value={loginForm.password}
                  onChange={handleLogin}
                  className="flex items-center sm:4/5 md:w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>            
            <div>
              <button
                type="submit"
                className="flex w-1/2 justify-center m-auto mt-6 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
