import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";

function Navbar() {
  return (
    <div
      className="p-8 bg-white fixed
     w-full top-0 z-40 gap-10 ">
      <div className="h-0 w-30">
        <img  src={logo} alt="logo" />
      </div>
      <div className="flex justify-end gap-10 mr-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        
      </div>
    </div>
  );
}

export default Navbar;
