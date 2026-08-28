/* ---------------------------------
 * Componente TextField padrão que
 * representa um 'input' em diferentes
 * partes do projeto.
 * ---------------------------------
 *
 */

import "./TextField.css";

export function TextField({ label, icon, name, ...rest }) {
  return (
    <div className="field">
      <label for={name}>{label}</label>
      <div className="field__item">
        {icon && <img src={icon} />}
        <input id={name} {...rest} />
      </div>
    </div>
  );
}
