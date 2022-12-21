import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { AdminInfo } from "../../utils/typs";
import { setAdminInfo } from "../../feature/uiSlice";
import { useDispatch } from "react-redux";
import { getToken } from "../../utils/get-token";

export const adminInfo = async () => {
  const headers = { Authorization: `Bearer ${getToken()}` };
  const { data } = await http.get(API_ENDPOINTS.ADMININFO, { headers });
  return data as AdminInfo;
};
export const useGetAdminInfoQuery = (isAuthorized: boolean) => {
  const dispatch = useDispatch();
  return useQuery<AdminInfo, Error>([API_ENDPOINTS.ADMININFO], adminInfo, {
    onSuccess: (data) => {
      dispatch(setAdminInfo(data));
    },
    enabled: isAuthorized,
  });
};
