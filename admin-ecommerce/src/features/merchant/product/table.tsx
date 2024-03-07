import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import useGetProducts from "@/services/merchant/product/use-get-product-query";
import RowSkeleton from "@/components/ui/RowSkeleton";
import { IProduct } from "@/types/product";

type Iprops = {
  isOpen: boolean;
  toggleModal: () => void;
  clasName?: string;
};

const tableHeader = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Price",
  },
  {
    id: 3,
    name: "Stock",
  },
  {
    id: 4,
    name: "Category",
  },
  {
    id: 5,
    name: "Status",
  },
  {
    id: 6,
    name: "Action",
  },
];

const ProductTable = ({ toggleModal }: Iprops) => {
  const { data: productList, isLoading } = useGetProducts();
  console.log("products", productList);
  return (
    <div className="rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center py-4 px-4 md:px-6 xl:px-7.5 ">
        <div className="">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Green Apple"
          />
        </div>
        <div>
          <button onClick={toggleModal} className="primary-btn bg-core-indigo">
            Add Product
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
     
     
      </div> */}
      <div className="w-full px-2">
        <table className="table-auto w-full">
          <thead className="tHead">
            <tr>
              {tableHeader.map((th: any) => (
                <th className="tableData" key={th.id}>
                  {th.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="tHead">
            {!isLoading && productList && productList.length > 0 ? (
              <>
                {productList.map((product: IProduct) => (
                  <tr
                    key={product._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="tableData">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center items-center">
                        <div className="h-12.5 w-15 rounded-md">
                          <img
                            src={product.image}
                            className="w-full h-full"
                            alt="Product"
                          />
                        </div>
                        <p className="text-sm text-black dark:text-white">
                          {product.name}
                        </p>
                      </div>
                    </td>
                    <td className="tableData">${product.price}</td>
                    <td className="tableData">{product.quantity}</td>
                    <td className="tableData">
                      <p className="text-sm text-black dark:text-white">
                        {product.category}
                      </p>
                    </td>
                    <td className="tableData ">
                      <p className="accepted-badge">
                        {product.isActive ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td className="tableData">
                      <div className="flex gap-2 ">
                        <div className="tableActionContainer">
                          <PencilIcon
                            className="tableEditIcons"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div className="tableActionContainer">
                          <TrashIcon
                            className="tableDeleteIcon"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <RowSkeleton />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
