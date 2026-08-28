/* ---------------------------------
 * Componente global do modal
 * ---------------------------------
 * Componente modal para ser englobado
 * dentro do componente principal da
 * aplicação, permitindo o acesso das
 * propriedades em diferentes níveis
 * da hierarquia.
 *
 */

import { createContext } from "preact";
import { useState } from "preact/hooks";
import { Modal } from "@/layout/Modal/Modal";
import { CreateBoardLayout } from "@/layout/Modal/CreateBoardLayout";
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

  // Opções de abertura do modal (status)
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
