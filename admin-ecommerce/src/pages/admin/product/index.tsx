import { useState } from "react";

import Breadcrumb from "@/components/ui/BreadCrumb";
import ProductTable from "@/features/admin/product/table";
import CreateProductModal from "@/features/admin/product/Modal";

function Product() {
  const [isUploadProductModalOpen, setIsUploadProductModal] =
    useState<boolean>(false);

  const toggleModal = () => {
    setIsUploadProductModal((prevState) => !prevState);
  };

  return (
    <>
      <Breadcrumb pageName={"/Product"} />
      <div className="w-full">
        <ProductTable
          isOpen={isUploadProductModalOpen}
          toggleModal={toggleModal}
        />
        {isUploadProductModalOpen && (
          <CreateProductModal
            isOpen={isUploadProductModalOpen}
            toggleModal={toggleModal}
            clasName="max-w-[80vw]"
          />
        )}
      </div>
    </>
  );
}

export default Product;
