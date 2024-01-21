import { useState } from "react";

export function CreateTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,

              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const value = await res.json();
            setTodos((prev) => [value.data, ...prev]);
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
