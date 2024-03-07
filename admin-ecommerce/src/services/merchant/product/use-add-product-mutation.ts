import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";
import { ProductConfig } from "@/services/api.config";

const addProductApi = async ({ data }: { data: FormData }) => {
  try {
    console.log("data", data.get("images"));
    const url = ProductConfig.ADD_PRODUCT();
    const response = await http.post(url, data);
    console.log("reponse", response);
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
    return;
  }
};

const useAddProductMutation = ({
  reset,
  toggleModal,
  setImage,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reset: any;
  toggleModal: () => void;
  setImage: Dispatch<SetStateAction<File | null>>;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProductApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      reset();
      setImage(null);
      toggleModal();
      toast.success(data?.message || "product successfully added");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (e: any) => {
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useAddProductMutation;
