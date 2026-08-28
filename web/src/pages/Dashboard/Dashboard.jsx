/* ---------------------------------
 * Página de dashboard
 * ---------------------------------
 * Página onde se exibe os componentes
 * principais do projeto como todas as
 * tasks, cards e boards.
 *
 */

import "./Dashboard.css";
import NewIcon from "/images/new.svg";
import BoardIcon from "/images/board.svg";
import { Button } from "@/components/Button/Button";
import Canva from "@/layout/Canva/Canva";
import { useContext, useEffect, useState } from "preact/hooks";
import { ModalContext } from "@/context/ModalContext";
import { getBoards } from "@/api/getBoards";

export function Dashboard() {
  const setModal = useContext(ModalContext);

  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardsIndex, setCardsIndex] = useState(null);

  useEffect(() => {
    let boardsResponse = getBoards();
    setBoards(boardsResponse);

    // Ajusta o formato do JSON dos cards para serem exibidos
    // dentro do Canva.
    let cardsIndexMap = {};
    boardsResponse.forEach((board) => {
      Object.entries(board.cards).map(([key, value]) => {
        cardsIndexMap[key] = value.name;
      });

      const cards = {};
      Object.entries(board.cards).forEach(([key, value]) => {
        cards[key] = value.tasks;
      });

      board.cards = cards;
    });

    setCardsIndex(cardsIndexMap);

    return () => {
      boardsResponse = null;
    };
  }, []);

  const chooseBoard = (id) => {
    const board = boards.find((item) => item.id == id);
    setSelectedBoard(board);
  };

  return (
    <>
      <main className="dashboard">
        <aside className="dashboard_sidebar">
          <div className="actions">
            <Button onClick={() => setModal(true, "CREATE_BOARD")}>
              <img src={NewIcon} style={{ marginRight: 5 }} />
              Create board
            </Button>
          </div>

          <div className="boards">
            {boards.map((board) => (
              <span
                className="board__item"
                key={board.id}
                onClick={() => chooseBoard(board.id)}
              >
                <img src={BoardIcon} />
                <p>{board.name}</p>
              </span>
            ))}
          </div>
        </aside>

        <section className="dashboard_content">
          <header className="content__navbar">
            <span className={selectedBoard == null && "unselected"}>
              {selectedBoard?.name ?? "Select a board"}
            </span>
          </header>

          {selectedBoard == null ? (
            <main className="content--unselected">
              <h2>Board not selected</h2>
            </main>
          ) : (
            <Canva cards={selectedBoard.cards} cardsIndex={cardsIndex} />
          )}
        </section>
      </main>
    </>
  );
}
