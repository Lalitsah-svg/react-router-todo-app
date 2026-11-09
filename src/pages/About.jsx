function About() {
  return (
    <div className="page">
      <section className="page-header">
        <span className="section-label">ABOUT THE PROJECT</span>

        <h2>React Hooks & Routing</h2>

        <p>
          This project demonstrates the core concepts required for the
          Week 3 React assignment.
        </p>
      </section>

      <section className="concept-grid">
        <article className="about-card">
          <span>01</span>
          <h3>useState</h3>
          <p>
            Manages tasks and form input while updating the interface
            when state changes.
          </p>
        </article>

        <article className="about-card">
          <span>02</span>
          <h3>useEffect</h3>
          <p>
            Synchronizes task data with localStorage whenever the task
            state changes.
          </p>
        </article>

        <article className="about-card">
          <span>03</span>
          <h3>React Router</h3>
          <p>
            Provides three separate client-side pages: Home, Tasks,
            and About.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;