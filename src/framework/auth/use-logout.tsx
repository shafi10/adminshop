import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { unauthorize, setAdminInfo } from "../../feature/uiSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { ROUTES } from "../../utils/routes";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}
async function logout() {
  return {
    ok: true,
    message: "Logout Successful!",
  };
}
export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation(() => logout(), {
    onSuccess: () => {
      Cookies.remove("auth_token");
      dispatch(unauthorize());
      localStorage.removeItem("persist:root");
      setAdminInfo({
        _id: "",
        name: "",
        email: "",
        roles: [""],
      });
      toast.success("Logout Successful!");
      navigate(ROUTES.LOGIN);
    },
    onError: (data) => {
      console.log(data, "logout error response");
    },
  });
};
