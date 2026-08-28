/* ---------------------------------
 * Wrapper modal para uso geral
 * ---------------------------------
 * Componente utilitário que pode ser
 * usado para diferentes ações: Criar
 * quadro, editar task, criar card...
 *
 */

import "./Modal.css";
import { useContext, useEffect, useRef } from "preact/hooks";
import { ModalContext } from "@/context/ModalContext";

export function Modal({ children }) {
  const childRef = useRef(null);
  const setModal = useContext(ModalContext);

  // Fecha modal ao clicar fora
  const handleOutsideModalContent = (event) => {
    if (childRef.current && !childRef.current.contains(event.target)) {
      setModal(false, null);
    }
  };

  useEffect(() => {
    // 'Escuta' momento do clica fora da área do modal
    document.addEventListener("mousedown", handleOutsideModalContent);

    return () => {
      // Remove o evento de click (cleanup)
      document.removeEventListener("mousedown", handleOutsideModalContent);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal__content" ref={childRef}>
        {children}
      </div>
    </div>
  );
}
