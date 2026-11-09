import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoStats from "../components/TodoStats";

function Tasks({
  todos,
  task,
  setTask,
  addTodo,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <div className="page">
      <section className="page-header">
        <div>
          <span className="section-label">TASK MANAGEMENT</span>

          <h2>Your Tasks</h2>

          <p>
            Add, complete, and remove tasks using reusable React components.
          </p>
        </div>
      </section>

      <TodoStats todos={todos} />

      <section className="workspace">
        <div className="workspace-header">
          <div>
            <span className="section-label">WORKSPACE</span>
            <h2>Task List</h2>
          </div>
        </div>

        <TodoForm
          task={task}
          setTask={setTask}
          onAdd={addTodo}
        />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </section>
    </div>
  );
}

export default Tasks;