import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
// import { useNavigate } from "react-router-dom";
// import { ROUTES } from "../../utils/routes";
import { InitialCategoryValue } from "../../utils/typs";
import { getToken } from "../../utils/get-token";

export async function addProduct(input: any) {
  const headers = { Authorization: `Bearer ${getToken()}` };
  return await http.post(`${API_ENDPOINTS.PRODUCTS}`, input, { headers });
}
export const useAddProduct = () => {
  // const navigate = useNavigate();
  return useMutation((input: any) => addProduct(input), {
    onSuccess: (data: any) => {
      // navigate(ROUTES?.HOME);
      toast.success("Create successful");
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};
