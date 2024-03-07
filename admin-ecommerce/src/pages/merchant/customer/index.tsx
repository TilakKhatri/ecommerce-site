import Breadcrumb from "@/components/ui/BreadCrumb";

import CustomerTable from "@/features/merchant/customer/table";

function Customer() {
  return (
    <>
      <Breadcrumb pageName={"Customers"} />
      <div className="w-full">
        <CustomerTable />
      </div>
    </>
  );
}

export default Customer;
