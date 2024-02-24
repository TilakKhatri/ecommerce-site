import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = React.lazy(() => import("@/components/ui/Modal"));

const AddProductForm = React.lazy(() => import("./AddProductForm"));

type Iprops = {
  isOpen: boolean;
  toggleModal: () => void;
  clasName?: string;
};

function CreateProductModal({ isOpen, toggleModal, clasName }: Iprops) {
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
      <AddProductForm className="mt-6" toggleModal={toggleModal} />
    </Modal>
  );
}

export default CreateProductModal;
