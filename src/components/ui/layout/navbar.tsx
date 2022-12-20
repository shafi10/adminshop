import React from "react";
import "./css/navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="nav_content">
        <div className="logo" title="Admin Panel">
          Shop
        </div>
        <ul className="nav_list">
          <li>{"Hello, Abc"}</li>
          <li className="logout_btn">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
