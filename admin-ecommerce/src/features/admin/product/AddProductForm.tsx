import useGetCategoryQuery from "@/services/admin/category/use-get-category-query";
import cn from "classnames";
import * as yup from "yup";

type Iprops = {
  toggleModal: () => void;
  className?: string;
};

interface IUploadProduct {
  name: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
}

const schema = yup
  .object({
    name: yup.string().required("Product name is required."),
    category: yup.string().required("Select related category"),
    description: yup.string().required("Description is required."),
    quantity: yup.number().required("Quantity is required."),
    price: yup.number().required("Price must required."),
  })
  .required();

function AddProductForm({ className, toggleModal }: Iprops) {
  const { data: categoriesList } = useGetCategoryQuery();

  return (
    <form
      // onSubmit={handleSubmit(handleCreateInstallment)}
      className={cn(className)}
    >
      <fieldset>
        <label htmlFor="name" className="label">
          Product name <span className="required">(required)</span>
        </label>

        <input
          // {...register("name")}
          id="name"
          className="input"
          type="text"
          placeholder="Enter Product name"
        />
        {/* {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )} */}
      </fieldset>
      <div className="flex gap-2 items-center mt-4">
        <fieldset className="w-full">
          <label htmlFor="name" className="label">
            Image <span className="required">(required)</span>
          </label>

          <input
            // {...register("name")}
            id="images"
            className="input"
            type="file"
          />
          {/* {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )} */}
        </fieldset>
        {/*   <fieldset>
          <label htmlFor="name" className="label">
            Image2 <span className="required">(required)</span>
          </label>

          <input
          
            id="name"
            className="input"
            type="file"
          />
      
        </fieldset>
        <fieldset>
          <label htmlFor="name" className="label">
            Image3 <span className="required">(required)</span>
          </label>

          <input
       
            id="name"
            className="input"
            type="file"
          />
       
        </fieldset> */}
      </div>
      <fieldset className="mt-4">
        <label htmlFor="amount" className="label">
          Category
        </label>

        <select
          id="category"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg input px-1"
        >
          <option className="input" selected>
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
      </fieldset>

      <fieldset className="mt-4">
        <label htmlFor="description" className="label">
          Product Description <span className="required">(required)</span>
        </label>

        <textarea
          // {...register("description")}
          id="description"
          className="input"
          placeholder="Short description Installment"
          cols={30}
          rows={8}
        />
      </fieldset>
      <div className="flex w-full justify-between gap-2 flex-col md:flex-row">
        <fieldset className="mt-4 w-1/2">
          <label htmlFor="amount" className="label">
            Quantity <span className="required">(required)</span>
          </label>

          <input
            // {...register("amount")}
            id="amount"
            className="input"
            type="text"
            placeholder="Enter number of products"
          />
        </fieldset>
        <fieldset className="mt-4 w-1/2">
          <label htmlFor="amount" className="label">
            Price <span className="required">(required)</span>
          </label>

          <input
            // {...register("amount")}
            id="amount"
            className="input"
            type="text"
            placeholder="Enter number of products"
          />
        </fieldset>
      </div>
      <button className="mt-8 primary-btn" type="submit">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
