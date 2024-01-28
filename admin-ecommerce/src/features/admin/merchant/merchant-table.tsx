import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import image from "/images.jpg";

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
    name: " Number of products",
  },
  {
    id: 3,
    name: "Status",
  },
  {
    id: 4,
    name: "Action",
  },
];

const MerchantTable = ({ isOpen, toggleModal }: Iprops) => {
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td className="tableData">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <img src={image} className="w-full h-full" alt="Product" />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    Apple Watch Series 7
                  </p>
                </div>
              </td>
              <td className="tableData">56</td>

              <td className="tableData">Active</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MerchantTable;
