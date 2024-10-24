import React from 'react';
import { useState } from 'react';

const Navbar = () =>{

  return (

    <div className="px-1.5 py-1.5 text-white flex  justify-between bg-rose-500 border-2">
      <div className="w-0.5"> 
      <div className ="w-12"> 
        <img src="https://i.imgur.com/8SSRICl.png" className= "w-full m-auto"alt="img1"/>
      </div>
      </div>
      <div className=" w-0.5 px-[10px] text-white flex justify-evenly">
        <div>Cart</div>
        <div>Login</div>
      </div>
      
    </div>

)
};
export default Navbar 