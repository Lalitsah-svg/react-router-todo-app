import { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";

import "./App.css";

const STORAGE_KEY = "react-router-todo-tasks";

const initialTodos = [
  {
    id: 1,
    text: "Learn React Router",
    completed: true,
  },
  {
    id: 2,
    text: "Practice useState and useEffect",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      return savedTodos ? JSON.parse(savedTodos) : initialTodos;
    } catch {
      return initialTodos;
    }
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <span className="eyebrow">WEEK 3 • REACT</span>

          <h1>TaskFlow</h1>

          <p>
            A modern task manager built with React hooks and routing.
          </p>
        </div>

        <div className="header-badge">
          React Router
        </div>
      </header>

      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Tasks
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </nav>

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home todos={todos} />}
          />

          <Route
            path="/tasks"
            element={
              <Tasks
                todos={todos}
                task={task}
                setTask={setTask}
                addTodo={addTodo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>
          Built with React • Hooks • Routing • Components
        </p>
      </footer>
    </div>
  );
}

export default App;