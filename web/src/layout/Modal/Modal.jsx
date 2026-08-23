import { useEffect, useRef } from "preact/hooks";
import "./Modal.css";

export function Modal({ setOpenModal, children }) {
  const childRef = useRef(null);

  useEffect(() => {
    const handleOutsideModalContent = (event) => {
      if (childRef.current && !childRef.current.contains(event.target)) {
        setOpenModal(false);
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
