export function Todos({ todos }) {


  return <div>
    {todos.map(function(todo) {
      return <div>
        <h1 >{todo.title}</h1>
        <h2 >{todo.description}</h2>
        <button style={{ padding: 10, margin: 10 }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
      </div>
    })
    }
  </div>
}
