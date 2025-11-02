import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-main">
      <div className="bg-[#f1f3f2] rounded-lg p-6 max-wmd relative">
        <button
          className="absolute top-2 right-2 text-black hover:text-grey-800 text-xl px-2 py-1 rounded-[6px]  hover:bg-red-700 hover:text-white hover:cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
