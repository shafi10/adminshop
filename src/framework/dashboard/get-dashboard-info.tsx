import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { Home } from "../../utils/typs";

export const dashboardInfo = async () => {
  const { data } = await http.get(API_ENDPOINTS.DASHBOARD);
  return data as Home;
};
export const useGetDashboardInfoQuery = () => {
  return useQuery<Home, Error>([API_ENDPOINTS.DASHBOARD], dashboardInfo);
};
