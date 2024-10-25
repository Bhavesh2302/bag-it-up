import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Bag from "../Pages/Bag";
import AdminPrivateRoute from "../PrivateRoutes/AdminPrivateRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Cart from "../Pages/Cart";
import AdminDashboard from "../Pages/AdminDashboard";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bag" element={<Bag />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin_dashboard"
        element={
          <AdminPrivateRoute>
            < AdminDashboard/>
          </AdminPrivateRoute>
        }
      /> 
    </Routes>
  );
};

export default ProjectRoutes;
