import React from "react";
import "./css/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { openModal } from "../../../feature/modalSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const adminInfo = useSelector((state: RootState) => state.uislice.adminInfo);
  const logoutModal = () => {
    dispatch(openModal({ view: "LOGOUT_VIEW" }));
  };
  return (
    <div className="navbar">
      <div className="nav_content">
        <div className="logo" title="Admin Panel">
          Shop
        </div>
        <ul className="nav_list">
          <li>Hello, {adminInfo?.name}</li>
          <li className="logout_btn" onClick={logoutModal}>
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
