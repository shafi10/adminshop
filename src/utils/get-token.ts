import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("auth_token") || null;
};
