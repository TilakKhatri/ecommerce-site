import useGetCategoryQuery from "@/services/admin/category/use-get-category-query";
import useAddProductMutation from "@/services/merchant/product/use-add-product-mutation";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

type Iprops = {
  toggleModal: () => void;
  className?: string;
};

interface IUploadProduct {
  name: string;
  category: string;
  description: string;
  quantity: string;
  price: string;
}

const schema = yup
  .object({
    name: yup.string().required("Product name is required."),
    category: yup.string().required("Select related category"),
    description: yup.string().required("Description is required."),
    quantity: yup.string().required("Quantity is required."),
    price: yup.string().required("Price must required."),
  })
  .required();

function AddProductForm({ className, toggleModal }: Iprops) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUploadProduct>({
    resolver: yupResolver(schema),
  });

  const { data: categoriesList } = useGetCategoryQuery();
  const [image, setImage] = useState<File | null>(null);
  // creating formdata
  const handleSubmitData: SubmitHandler<IUploadProduct> = (data) => {
    const { name, category, description, quantity, price } = data;
    console.log("data", data);

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("images", image);

    console.log("formdata", formData);
    addProduct({ data: formData });
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
  const { mutate: addProduct, isPending } = useAddProductMutation({
    reset,
    toggleModal,
    setImage,
  });

  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className={cn(className)}>
      <fieldset>
        <label htmlFor="name" className="label">
          Product name <span className="required">(required)</span>
        </label>

        <input
          {...register("name")}
          id="name"
          className="input"
          type="text"
          placeholder="Enter Product name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-core-red">{errors.name.message}</p>
        )}
      </fieldset>

      <fieldset>
        <label className="label">Product Image</label>
        {/* <p className="body-default text-[#808080]">
          You can upload 1 file. Upload the product image.
        </p> */}

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
        <label htmlFor="amount" className="label">
          Category
        </label>

        <select
          id="category"
          {...register("category")}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg input px-1"
        >
          <option className="hidden" value="">
            Choose a Category
          </option>
          {categoriesList &&
            categoriesList.map((category: ICategory) => (
              <option
                key={category.name}
                value={category.name}
                className="input"
              >
                {category.name}
              </option>
            ))}
        </select>
        {errors.name && (
          <p className="mt-2 text-sm text-core-red">
            {errors.category?.message}
          </p>
        )}
      </fieldset>

      <fieldset className="mt-4">
        <label htmlFor="description" className="label">
          Product Description <span className="required">(required)</span>
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
      <div className="flex w-full justify-between gap-2 flex-col md:flex-row">
        <fieldset className="mt-4 w-1/2">
          <label htmlFor="quantity" className="label">
            Quantity <span className="required">(required)</span>
          </label>

          <input
            {...register("quantity")}
            id="quantity"
            className="input"
            type="text"
            placeholder="Enter number of products"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-core-red">
              {errors.quantity?.message}
            </p>
          )}
        </fieldset>
        <fieldset className="mt-4 w-1/2">
          <label htmlFor="price" className="label">
            Price <span className="required">(required)</span>
          </label>

          <input
            {...register("price")}
            id="price"
            className="input"
            type="text"
            placeholder="Enter number of products"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-core-red">
              {errors.price?.message}
            </p>
          )}
        </fieldset>
      </div>
      <button className="mt-8 primary-btn" type="submit">
        Add Product{isPending && "..."}
      </button>
    </form>
  );
}

export default AddProductForm;
