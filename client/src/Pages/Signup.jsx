import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userSignup } from "../Redux/Reducers/userAuthReducer/action";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  });
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
        console.log(res, "signupres");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-2/5 border-gray-800 outline-double m-auto">
      <div className="w-full">
        <div className="w-full">
        <img
            alt="bag_it_up"
            src="https://i.imgur.com/8SSRICl.png"
            className="h-16 w-16 m-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to your account
          </h2>
        </div>

        <div className="w-4/5 m-auto">
          <form onSubnit={handleSubmit} className="mt-8">
            <div className="flex items-center justify-evenly mt-4">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  autoComplete="firstname"
                  value={signupForm.firstname}
                  onChange={handleSignup}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Lastname
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required
                  autoComplete="lastname"
                  value={signupForm.lastname}
                  onChange={handleSignup}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  required
                  autoComplete="mobile"
                  value={signupForm.mobile}
                  onChange={handleSignup}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-evenly mt-4">
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
                  required
                  autoComplete="email"
                  value={signupForm.mobile}
                  onChange={handleSignup}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-evenly">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={signupForm.password}
                  onChange={handleSignup}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
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
