import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const data = await res.json();
      setTodos(data.todos);
    });
  }, []);

  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}
export default App;
