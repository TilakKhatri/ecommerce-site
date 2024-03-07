function RowSkeleton() {
  return (
    <tr className="m-4 animate-pulse odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="tableData">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center items-center">
          <div className="h-12.5 w-15 rounded-md bg-gray-400 animate-pulse">
            {/* Image */}
          </div>
          <p className="text-sm text-black dark:text-white bg-bodydark1 h-4 w-full  animate-pulse">
            {/* Product Name */}
          </p>
        </div>
      </td>
      <td className="  animate-pulse px-2">
        {/* Price */}
        <p className="text-sm text-black dark:text-white bg-bodydark1 h-4 w-full rounded animate-pulse">
          {/* Product Name */}
        </p>
      </td>
      <td className="  animate-pulse">
        {/* Quantity */}
        <p className="text-sm text-black dark:text-white bg-bodydark1 h-4 w-full rounded animate-pulse">
          {/* Product Name */}
        </p>
      </td>
      <td className="  animate-pulse">
        <p className="text-sm text-black dark:text-white bg-bodydark1 h-4 w-full rounded animate-pulse">
          {/* Product Name */}
        </p>
      </td>
      <td className="  animate-pulse">
        {/* Status */}
        <p className="text-sm text-black dark:text-white bg-bodydark1 h-4 w-full rounded animate-pulse">
          {/* Product Name */}
        </p>
      </td>
      <td className=" ml-4">
        <div className="flex gap-2 items-center ">
          <div className="tableActionContainer w-8 h-8 bg-bodydark1 rounded-full animate-pulse">
            {/* Edit Icon */}
          </div>
          <div className="tableActionContainer w-8 h-8 bg-bodydark1 rounded-full  animate-pulse">
            {/* Delete Icon */}
          </div>
        </div>
      </td>
    </tr>
  );
}
export default RowSkeleton;
