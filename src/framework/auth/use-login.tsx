import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { useDispatch } from "react-redux";
import { authorize } from "../../feature/uiSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { InitialLoginValue } from "../../utils/typs";
// import { validateToken } from "../../utils/validateToken";

export async function login(input: InitialLoginValue) {
  return await http.post(`${API_ENDPOINTS.LOGIN}`, input);
}
export const useLoginMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation((input: InitialLoginValue) => login(input), {
    onSuccess: (data: any) => {
      // const isValid = validateToken(data?.data?.token);
      Cookies.set("auth_token", data?.data?.token, { expires: 365 });
      dispatch(authorize(true));
      navigate(ROUTES?.HOME);
      toast.success("Login successful");
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};
