import "./Dashboard.css";

export function Dashboard() {
  return (
    <>
      <main className="dashboard">
        <aside className="dashboard_sidebar">
          <div className="actions">
            <button type="button">Create</button>
          </div>
          <div className="boards">
            <span className="board__item">My First Board</span>
            <span className="board__item">Personal Project</span>
          </div>
        </aside>

        <section className="dashboard_content">
          <header className="navbar">
            <span>My First board</span>
          </header>

          <main className="canva">
            <article className="card">
              <header className="navbar">
                <span className="card__name">Backlog</span>
              </header>

              <div className="tasks">
                <nav>Task 1</nav>
                <nav>Task 2</nav>
                <nav>Task 3</nav>
              </div>
            </article>

            <article className="card">
              <header className="navbar">
                <span className="card__name">In Progress</span>
              </header>

              <div className="tasks">
                <nav>Task 1</nav>
                <nav>Task 2</nav>
                <nav>Task 3</nav>
              </div>
            </article>
          </main>
        </section>
      </main>
    </>
  );
}
