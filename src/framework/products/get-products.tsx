import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../../utils/api-endpoints";
import http from "../../utils/http";
import { Products } from "../../utils/typs";
import { getToken } from "../../utils/get-token";
import { useDispatch } from "react-redux";
import { setProducts } from "../../feature/dataSlice";

export const productList = async () => {
  const headers = { Authorization: `Bearer ${getToken()}` };
  const { data } = await http.get(
    `${API_ENDPOINTS.PRODUCTS}/list?q=true&skip=${0}&limit=${100}`,
    {
      headers,
    }
  );
  return data as Products[];
};
export const useGetProductsQuery = () => {
  const dispatch = useDispatch();
  return useQuery<Products[], Error>([API_ENDPOINTS.CATEGORIES], productList, {
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });
};
