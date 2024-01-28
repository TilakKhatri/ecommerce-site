import { useState } from "react";

import Breadcrumb from "@/components/ui/BreadCrumb";
import MerchantTable from "@/features/admin/merchant/merchant-table";
import CreateProductModal from "@/features/admin/product/Modal";

function Merchant() {
  const [isUploadProductModalOpen, setIsUploadProductModal] =
    useState<boolean>(false);

  const toggleModal = () => {
    setIsUploadProductModal((prevState) => !prevState);
  };

  return (
    <>
      <Breadcrumb pageName={"Merchant"} />
      <div className="w-full">
        <MerchantTable
          isOpen={isUploadProductModalOpen}
          toggleModal={toggleModal}
        />
        {isUploadProductModalOpen && (
          <CreateProductModal
            isOpen={isUploadProductModalOpen}
            toggleModal={toggleModal}
            clasName="max-w-[70vw]"
          />
        )}
      </div>
    </>
  );
}

export default Merchant;
