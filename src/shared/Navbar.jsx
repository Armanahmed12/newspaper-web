import React from "react";
import { NavLink } from "react-router";
import { FcBusinessman } from "react-icons/fc";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-15 my-5">
        <div></div>
      <div>
        <NavLink className="text-red-500 mr-7 text-lg font-bold">Home</NavLink>
        <NavLink className="text-red-500 mr-7 text-lg font-bold">About</NavLink>
        <NavLink className="text-red-500 mr-7 text-lg font-bold">Career</NavLink>
      </div>
      <div className="flex items-center justify-center gap-4">
        <FcBusinessman className="text-4xl"/>
        <button className="text-white bg-red-500 px-4 py-2 rounded font-bold ">
          <NavLink to="/auth/logIn">LogIn</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
