import "./Modal.css";

export function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>
  );
}
