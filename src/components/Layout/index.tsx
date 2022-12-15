import * as React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "../../store";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

export interface Props {
  title?: string;
}

const Layout: React.FC<Props> = () => {
  const isAuthorized = useSelector(
    (state: RootState) => state.uislice.isAuthorized
  );
  if (!isAuthorized) {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
  return (
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
};

export default Layout;
