import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/Reducers/userAuthReducer/action";
import {Link} from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth);
  console.log(isAuth);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

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
        console.log(res,"formResponse");
      })
      .catch((err) => {
        return err;
      })
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  mt-6 lg:px-8 bg-customBiege">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="bag_it_up"
            src="https://i.imgur.com/8SSRICl.png"
            className="h-14 w-14 m-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={loginForm.email}
                  required
                  onChange={handleLogin}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginForm.password}
                  required
                  onChange={handleLogin}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
