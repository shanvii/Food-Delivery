import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="panel">
        <img className="logo" src={assets.logo2} alt="" />
        <p className="admin">Admin panel.</p>
      </div>
      <img className="profile" src={assets.idsmall} alt="" />
    </div>
  );
};

export default Navbar;
