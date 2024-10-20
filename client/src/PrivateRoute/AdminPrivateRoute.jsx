import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const user = useSelector((state) => {
    state.auth;
  });
  const location = useLocation();

  if (user?.isAuth && user?.userData?.role !== 'user'){
    return children;
  } else {
    return <Navigate to="/login" state={{from: location}}/>;
  }
};

export default AdminPrivateRoute;
