import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import http from "@/lib/http";
import { CategoryConfig } from "@/services/api.config";

const addCategoryApi = async ({ data }: { data: FormData }) => {
  try {
    console.log("data", data.get("images"));
    const url = CategoryConfig.ADD_CATEGORIES();
    const response = await http.post(url, data);
    console.log("reponse", response);
    return response.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
    return;
  }
};

const useAddCategoryMutation = ({
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
    mutationFn: addCategoryApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      reset();
      setImage(null);
      toggleModal();
      toast.success(data?.message || "Category successfully added");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (e: any) => {
      toast.error(e?.response?.data?.message || "Something went wrong");
    },
  });
};

export default useAddCategoryMutation;
