import "./Button.css";

export function Button({ children, type, variant, ...rest }) {
  return (
    <button type={type} className={"button" + " btn-" + variant} {...rest}>
      {children}
    </button>
  );
}
