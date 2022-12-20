import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/layout/sidebar";
import Navbar from "../ui/layout/navbar";

const LayoutDesign: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="layout_content">
        <Sidebar />
        <div className="main_content">
          <div className="main_content_layout">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDesign;
