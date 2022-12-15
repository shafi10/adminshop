import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/form/login";
import { RootState } from "../store";
import { ROUTES } from "../utils/routes";

export interface Props {
  title?: string;
}

const Login: React.FC<Props> = () => {
  const isAuthorized = useSelector(
    (state: RootState) => state.uislice.isAuthorized
  );
  if (isAuthorized) {
    return <Navigate to={ROUTES?.HOME} replace={true} />;
  }
  return (
    <div className="">
      <LoginForm />
    </div>
  );
};

export default Login;
