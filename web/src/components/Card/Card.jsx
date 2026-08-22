import { CollisionPriority } from "@dnd-kit/abstract";
import { useDroppable } from "@dnd-kit/react";
import "./Card.css";

export default function Card({ children, id, name }) {
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
      </header>

      <div className="tasks">{children}</div>
    </article>
  );
}
