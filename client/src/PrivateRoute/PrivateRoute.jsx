import React from "react";
import { useSelector } from "react-redux";
import { userAuthReducer } from "../Redux/Reducers/userAuthReducer/userAuthReducer";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => {
    state.auth;
  });
  const location = useLocation();

  if (user?.isAuth && user?.userData?.role === 'user') {
    return children;
  } else {
    return <Navigate to="/login" state={{from: location}}/>;
  }
};

export default PrivateRoute;
