import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AddCategoryForm from "./form/addCategoryForm";

const Modal = React.lazy(() => import("@/components/ui/Modal"));

type Iprops = {
  isOpen: boolean;
  toggleModal: () => void;
  clasName?: string;
};

function CreateCategoryModal({ isOpen, toggleModal, clasName }: Iprops) {
  return (
    <Modal isOpen={isOpen} closeModal={toggleModal} className={clasName}>
      <div className="flex justify-end">
        <div
          onClick={toggleModal}
          className="p-1 rounded-full h-fit cursor-pointer bg-neutral-50"
        >
          <XMarkIcon height={24} width={24} />
        </div>
      </div>
      <AddCategoryForm className="mt-6" toggleModal={toggleModal} />
    </Modal>
  );
}

export default CreateCategoryModal;
