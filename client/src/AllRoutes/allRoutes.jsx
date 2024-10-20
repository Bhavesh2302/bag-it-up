import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Bag from "../Pages/Bag";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import Cart from "../Pages/Cart";


const allRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bags" element={<Bag/>}/>
        <Route path="/cart" element={
            <PrivateRoute>
                <Cart/>
            </PrivateRoute>
            }/>
    </Routes>
  )
}

export default allRoutes