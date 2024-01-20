export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1 style={{ padding: 10, margin: 10 }}>{todo.title}</h1>
            <h2 style={{ padding: 10, margin: 10 }}>{todo.description}</h2>
            <button style={{ padding: 10, margin: 10 }}>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
