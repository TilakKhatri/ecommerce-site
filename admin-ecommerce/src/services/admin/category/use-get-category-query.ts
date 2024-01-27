import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";
import { CategoryConfig } from "@/services/api.config";

const getCategoryApi = async () => {
  try {
    const url = CategoryConfig.GET_CATEGORIES();
    const response = await http(url);
    return response.data.categories;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
    return;
  }
};

const useGetCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: getCategoryApi,
  });
};

export default useGetCategoryQuery;
