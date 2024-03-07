import http from "@/lib/http";
import { ProductConfig } from "@/services/api.config";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const getProductsApi = async () => {
  try {
    const url = ProductConfig.GET_PRODUCTS();
    const response = await http.get(url);
    return response.data.products;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
    return;
  }
};

const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
  });
};

export default useGetProducts;
