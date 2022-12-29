import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { InitialCategoryValue } from "../../utils/typs";
import { getToken } from "../../utils/get-token";

export async function editCategory(obj: InitialCategoryValue) {
  const headers = { Authorization: `Bearer ${getToken()}` };
  return await http.put(`${API_ENDPOINTS.CATEGORIES}/${obj?._id}`, obj, {
    headers,
  });
}
export const useEditCategory = () => {
  const navigate = useNavigate();
  return useMutation((obj: InitialCategoryValue) => editCategory(obj), {
    onSuccess: (data: any) => {
      navigate(`/${ROUTES?.CATEGORIES}`);
      toast.success("Update successful");
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};
