import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { getToken } from "../../utils/get-token";
import { Category } from "../../utils/typs";
import { useDispatch } from "react-redux";
import { setCategories } from "../../feature/dataSlice";

export async function deleteCategory(id: string) {
  const headers = { Authorization: `Bearer ${getToken()}` };
  return await http.delete(`${API_ENDPOINTS.CATEGORIES}/${id}`, {
    headers,
  });
}
export const useDeleteCategory = (categories: Category[]) => {
  const dispatch = useDispatch();
  return useMutation((id: string) => deleteCategory(id), {
    onSuccess: (data: any) => {
      const categoryList = categories.filter(
        (item) => item._id !== data?.data?._id
      );
      dispatch(setCategories(categoryList));
      toast.success("Delete successful");
    },
    onError: (data: any) => {
      toast.error(data.response.data.message);
    },
  });
};
