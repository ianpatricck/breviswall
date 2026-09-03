/* ---------------------------------
 * Componente de card dentro de
 * um quadro
 * ---------------------------------
 *
 */

import "./Card.css";
import { CollisionPriority } from "@dnd-kit/abstract";
import { useDroppable } from "@dnd-kit/react";
import { useContext } from "preact/hooks";
import { ModalContext } from "@/context/ModalContext";
import EditIcon from "/images/edit.svg";

export default function Card({ children, id, name }) {
  const setModal = useContext(ModalContext);
  const { ref } = useDroppable({
    id,
    type: "column",
    accept: ["item"],
    collisionPriority: CollisionPriority.Low,
  });

  return (
    <article className="card" ref={ref}>
      <header className="navbar">
        <span className="card__name">{name}</span>
        <img
          className="card__edit"
          src={EditIcon}
          onClick={() => setModal(true, "EDIT_CARD")}
        />
      </header>

      <div className="tasks">{children}</div>
    </article>
  );
}
