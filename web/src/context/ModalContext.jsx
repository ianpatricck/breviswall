import { createContext } from "preact";
import { CreateBoardLayout } from "@/layout/Modal/CreateBoardLayout";
import { Modal } from "@/layout/Modal/Modal";
import { useState } from "preact/hooks";
import { EditTaskLayout } from "@/layout/Modal/EditTaskLayout";

// Context API - Modal
export const ModalContext = createContext();

// Provedor do Modal
export default function ModalProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(null);

  const setModal = (openModal, modalStatus) => {
    setOpenModal(openModal);
    setModalStatus(modalStatus);
  };

  const layout = {
    CREATE_BOARD: <CreateBoardLayout />,
    EDIT_TASK: <EditTaskLayout />,
  };

  return (
    <ModalContext.Provider value={setModal}>
      {openModal && <Modal>{layout[modalStatus]}</Modal>}
      {children}
    </ModalContext.Provider>
  );
}
