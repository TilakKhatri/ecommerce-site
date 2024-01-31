import CategoryTable from "@/features/admin/category/table";
import { useState, lazy } from "react";

const Breadcrumb = lazy(() => import("@/components/ui/BreadCrumb"));
const CreateCategoryModal = lazy(
  () => import("@/features/admin/category/Modal")
);

function Category() {
  const [isUploadCategoryModalOpen, setIsUploadCategoryModal] =
    useState<boolean>(false);

  const toggleModal = () => {
    setIsUploadCategoryModal((prevState) => !prevState);
  };

  return (
    <>
      <Breadcrumb pageName={"Category"} />
      <div className="w-full">
        <CategoryTable
          isOpen={isUploadCategoryModalOpen}
          toggleModal={toggleModal}
        />
        {isUploadCategoryModalOpen && (
          <CreateCategoryModal
            isOpen={isUploadCategoryModalOpen}
            toggleModal={toggleModal}
            clasName="max-w-[60vw]"
          />
        )}
      </div>
    </>
  );
}

export default Category;
