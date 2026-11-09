import { Link } from "react-router-dom";

function Home({ todos }) {
  const completed = todos.filter((todo) => todo.completed).length;
  const active = todos.length - completed;

  return (
    <div className="page">
      <section className="hero-card">
        <div>
          <span className="section-label">REACT ROUTER PROJECT</span>

          <h2>Stay organized. Get things done.</h2>

          <p>
            A responsive task manager demonstrating React components,
            props, state, hooks, and client-side routing.
          </p>

          <Link to="/tasks" className="primary-link">
            Open Task Manager →
          </Link>
        </div>

        <div className="hero-check">✓</div>
      </section>

      <section className="quick-stats">
        <div>
          <span>Total Tasks</span>
          <strong>{todos.length}</strong>
        </div>

        <div>
          <span>Active</span>
          <strong>{active}</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
      </section>
    </div>
  );
}

export default Home;