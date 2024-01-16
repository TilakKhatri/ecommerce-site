import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const tableHeader = [
  {
    id: 1,
    name: "S.N",
  },
  {
    id: 2,
    name: "Image",
  },
  {
    id: 3,
    name: "Name",
  },
  {
    id: 4,
    name: "Category",
  },

  {
    id: 5,
    name: "Created At",
  },
  {
    id: 6,
    name: "Actions",
  },
];
function Product() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between w-full gap-4">
          <h1 className="mb-4 text-3xl font-bold">Products</h1>
          <Link to="/course/create">
            <button type="button" className="primaryButton">
              Create
            </button>
          </Link>
        </div>
        <table width="100%">
          <thead>
            <tr className="border">
              {tableHeader.map((head) => {
                return (
                  <th className="tableHead" key={head.id}>
                    {head.name}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {/* {tableData && */}
            {/* tableData.map((data, i) => { */}
            {/* return ( */}
            <tr className={`border ${1 % 2 === 0 && "bg-gray-100"}`}>
              <td className="tableData">{/* {i + 1} */}</td>

              <td className="tableData">
                {/* {data?.image && (
                        <img src={data?.image} width={90} height={90} />
                      )} */}
              </td>
              <td className="tableData truncate">{/* {data?.name} */}</td>
              <td className="tableData truncate">
                {/* {data?.category?.name} */}
              </td>

              <td className="tableData">
                {/* {toLocaleDate(data?.createdAt)} */}
              </td>
              <td className="tableData">
                <div className="tableDataActionContainer">
                  <div
                    // onClick={() =>
                    //   navigate(`/course/edit/${data?.id}/editCourse`)
                    // }
                    className="tableActionContainer"
                  >
                    <PencilSquareIcon className="tableEditIcon" />
                  </div>
                  <div
                    // onClick={() => {
                    //   onOpen();
                    //   setSelectedId(data?.id);
                    // }}
                    className="tableActionContainer"
                  >
                    <TrashIcon className="tableDeleteIcon " />
                  </div>
                </div>
              </td>
            </tr>
            {/* ); */}
            {/* })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Product;
