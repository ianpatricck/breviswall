import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useContext, useState } from "preact/hooks";
import Card from "@/components/Card/Card";
import Task from "@/components/Task/Task";
import "./Canva.css";
import { ModalContext } from "@/context/ModalContext";

export default function Canva() {
  const setModal = useContext(ModalContext);

  const [cardItems, setCardItems] = useState({
    backlog: [
      {
        id: 1,
        name: "Fazer bolo de chocolate",
      },
      {
        id: 2,
        name: "Comprar carne",
      },
      {
        id: 3,
        name: "Criar agendador de tarefas",
      },

      {
        id: 4,
        name: "Desenvolver Front-End",
      },
    ],
    in_progress: [
      {
        id: 5,
        name: "Organizar pratos",
      },
      {
        id: 6,
        name: "Preparar o ambiente de homologação",
      },
    ],
    done: [
      {
        id: 7,
        name: "Criar Design da plataforma",
      },
      {
        id: 8,
        name: "Preparar o ambiente de homologação",
      },
    ],
    review: [],
    refactor: [
      {
        id: 9,
        name: "Preparar o ambiente de homologação",
      },
    ],
  });

  const cardNames = {
    backlog: "Backlog",
    in_progress: "In Progress",
    done: "Done",
    refactor: "Refactor",
    review: "Review",
  };

  return (
    <DragDropProvider
      onDragOver={(event) => {
        const { source } = event.operation;
        if (source?.type == "column") return;
        setCardItems((cards) => move(cards, event));
      }}
    >
      <main className="canva">
        {Object.entries(cardNames).map(([key, value]) => (
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
