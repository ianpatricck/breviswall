/* ---------------------------------
 * Componente Task dentro de
 * um card
 * ---------------------------------
 *
 */

import "./Task.css";
import { useSortable } from "@dnd-kit/react/sortable";

export default function Task({ id, index, column, name, onClick }) {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: "item",
    accept: "item",
    group: column,
  });

  return (
    <nav ref={ref} data-dragging={isDragging} onClick={onClick}>
      {name}
    </nav>
  );
}
