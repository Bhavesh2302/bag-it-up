import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const {isAuth, token, userData} = useSelector((state) => state.auth);
  const location = useLocation();

  if (isAuth && token && userData?.role !== 'user'){
    return children;
  } else {
    return <Navigate to="/login" state={{from: location}}/>;
  }
};

export default AdminPrivateRoute;
