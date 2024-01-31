import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

import useAddCategoryMutation from "@/services/admin/category/use-add-category-mutation";

type Iprops = {
  toggleModal: () => void;
  className?: string;
};

interface IUploadCategory {
  name: string;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required("Category name is required."),
    description: yup.string().required("Description is required."),
  })
  .required();

function AddCategoryForm({ className, toggleModal }: Iprops) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUploadCategory>({
    resolver: yupResolver(schema),
  });

  const [image, setImage] = useState<File | null>(null);
  // creating formdata
  const handleSubmitData: SubmitHandler<IUploadCategory> = (data) => {
    const { name, description } = data;
    console.log("data", data);

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    addCategory({ data: formData });
    // console.log("images", image);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      toast.error("Select an image");
      return;
    }
    // console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  //useMutation to upload all product details
  const { mutate: addCategory, isPending } = useAddCategoryMutation({
    reset,
    toggleModal,
    setImage,
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className={cn(className)}>
      <fieldset>
        <label htmlFor="name" className="label">
          Category name
        </label>

        <input
          {...register("name")}
          id="name"
          className="input"
          type="text"
          placeholder="Enter Category name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-core-red">{errors.name.message}</p>
        )}
      </fieldset>

      <fieldset>
        <label className="label">Category Image</label>
        <p className="body-default text-[#808080]">
          You can upload 1 file. Upload the product image.
        </p>

        <div
          // onDrop={handleDrop}
          // onDragOver={handleDrag}
          className="mt-4 h-64 flex flex-col items-center justify-center border-2 border-dashed border-neutral-300 rounded-xl bg-neutral-50"
        >
          {image ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(image)}
                className="object-cover h-60 overflow-hidden"
              />
              <XMarkIcon
                onClick={() => setImage(null)}
                height={28}
                width={28}
                className="absolute inset-y-0 right-0 
                  p-1 rounded-full cursor-pointer bg-neutral-50"
              />
            </div>
          ) : (
            <>
              {/* <p className="body-large">Drag and drop the Image file.</p> */}

              <label className="mt-4">
                <div className="primary-btn flex gap-2 items-center w-fit cursor-pointer">
                  <ArrowUpTrayIcon height={24} width={24} />
                  <p>Upload Image</p>
                </div>
                <input
                  onChange={handleImageChange}
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </>
          )}
        </div>
      </fieldset>

      <fieldset className="mt-4">
        <label htmlFor="description" className="label">
          Description
        </label>

        <textarea
          {...register("description")}
          id="description"
          className="input"
          placeholder="Short description Installment"
          cols={30}
          rows={8}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-core-red">
            {errors.description?.message}
          </p>
        )}
      </fieldset>

      <button className="mt-8 primary-btn" type="submit">
        Add Category{isPending && "..."}
      </button>
    </form>
  );
}

export default AddCategoryForm;
