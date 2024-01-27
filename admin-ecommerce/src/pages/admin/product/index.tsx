import Breadcrumb from "@/components/ui/BreadCrumb";
import ProductTable from "@/features/admin/product/table";

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
function Product() {
  return (
    <>
      <Breadcrumb pageName={"/Product"} />
      <div className="flex flex-col gap-10">
        <ProductTable />
      </div>
    </>
  );
}

export default Product;
