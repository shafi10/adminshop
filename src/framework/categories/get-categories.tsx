import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { Category, Home } from "../../utils/typs";
import { getToken } from "../../utils/get-token";

export const categoriesList = async () => {
  const headers = { Authorization: `Bearer ${getToken()}` };
  const { data } = await http.get(
    `${API_ENDPOINTS.CATEGORIESALL}?skip=${0}&limit=${10}`,
    {
      headers,
    }
  );
  return data as Category[];
};
export const useGetCategoriesQuery = () => {
  return useQuery<Category[], Error>(
    [API_ENDPOINTS.CATEGORIES],
    categoriesList
  );
};