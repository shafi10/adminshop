import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { getToken } from "../../utils/get-token";

export async function deleteCategory(id: string) {
  const headers = { Authorization: `Bearer ${getToken()}` };
  return await http.delete(`${API_ENDPOINTS.CATEGORIES}/${id}`, {
    headers,
  });
}
export const useDeleteCategory = () => {
  return useMutation((id: string) => deleteCategory(id), {
    onSuccess: (data: any) => {
      toast.success("Delete successful");
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};
