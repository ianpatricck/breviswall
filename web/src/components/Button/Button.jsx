import "./Button.css";

export function Button({ children, type, variant }) {
  return (
    <button type={type} className={"button" + " btn-" + variant}>
      {children}
    </button>
  );
}
