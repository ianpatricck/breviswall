/* ---------------------------------
 * Componente layout Canva
 * ---------------------------------
 * Layout onde é possível interagir
 * com os cards e tarefas de cada
 * quadro criada e atualizado.
 *
 */

import "./Canva.css";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useContext, useEffect, useState } from "preact/hooks";
import Card from "@/components/Card/Card";
import Task from "@/components/Task/Task";
import { ModalContext } from "@/context/ModalContext";

export default function Canva({ cards, cardsIndex }) {
  const setModal = useContext(ModalContext);
  const [cardItems, setCardItems] = useState(cards);

  useEffect(() => {
    setCardItems(cards);
  }, [cards]);

  return (
    <DragDropProvider
      onDragOver={(event) => {
        const { source } = event.operation;
        if (source?.type == "column") return;
        setCardItems((cards) => move(cards, event));
      }}
    >
      <main className="canva">
        {Object.entries(cardsIndex).map(([key, value]) => (
          <Card key={key} id={key} name={value}>
            {cardItems[key].map((item) => (
              <Task
                key={item.id}
                id={item.id}
                index={item.id}
                column={key}
                name={item.name}
                onClick={() => setModal(true, "EDIT_TASK")}
              />
            ))}
          </Card>
        ))}
      </main>
    </DragDropProvider>
  );
}
