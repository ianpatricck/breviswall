import "./Dashboard.css";
import NewIcon from "/images/new.svg";
import BoardIcon from "/images/board.svg";
import { Button } from "@/components/Button/Button";
import Canva from "@/layout/Canva/Canva";
import { useContext } from "preact/hooks";
import { ModalContext } from "@/context/ModalContext";

export function Dashboard() {
  const setModal = useContext(ModalContext);

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
            <span className="board__item">
              <img src={BoardIcon} style={{ marginRight: 5 }} />
              My First Board
            </span>
            <span className="board__item">
              <img src={BoardIcon} style={{ marginRight: 5 }} />
              Personal Project
            </span>
          </div>
        </aside>

        <section className="dashboard_content">
          <header className="content__navbar">
            <span>My First board</span>
          </header>

          <Canva />
        </section>
      </main>
    </>
  );
}
