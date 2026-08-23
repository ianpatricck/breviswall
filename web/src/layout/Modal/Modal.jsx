import { useContext, useEffect, useRef } from "preact/hooks";
import "./Modal.css";
import { ModalContext } from "@/context/ModalContext";

export function Modal({ children }) {
  const childRef = useRef(null);
  const setModal = useContext(ModalContext);

  useEffect(() => {
    const handleOutsideModalContent = (event) => {
      if (childRef.current && !childRef.current.contains(event.target)) {
        setModal(false, null);
      }
    };

    document.addEventListener("mousedown", handleOutsideModalContent);
    return () => {
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
