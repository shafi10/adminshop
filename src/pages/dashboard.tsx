import * as React from "react";
// import { useSelector } from "react-redux";
// import { useGetDashboardInfoQuery } from "../framework/dashboard/get-dashboard-info";
// import { RootState } from "../store";

export interface Props {
  title?: string;
}

const Dashboard: React.FC<Props> = () => {
  // const isAuthorized = useSelector(
  //   (state: RootState) => state.uislice.isAuthorized
  // );
  // const { data } = useGetDashboardInfoQuery();
  return <div>Dashboard Page</div>;
};

export default Dashboard;
