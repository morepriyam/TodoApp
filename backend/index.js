const express = require("express");
const { createTodo, updatetodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "You sent the wrong inputs" });
    return;
  }
  const data = await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({ data, msg: "Todo created" });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updatetodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "You sent the wrong inputs" });
    return;
  }
  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as Completed",
  });
});

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`);
});
