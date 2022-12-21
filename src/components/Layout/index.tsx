import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../ui/layout/sidebar";
import Navbar from "../ui/layout/navbar";
import { useGetAdminInfoQuery } from "../../framework/auth/use-admin-info";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ROUTES } from "../../utils/routes";

const LayoutDesign: React.FC = () => {
  const isAuthorized = useSelector(
    (state: RootState) => state.uislice.isAuthorized
  );

  if (!isAuthorized) {
    return <Navigate to={ROUTES?.LOGIN} replace={true} />;
  }
  const { isLoading } = useGetAdminInfoQuery(isAuthorized);
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
