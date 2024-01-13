const express = require("express")
const { createTodo, updatetodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const port = 3000;
app.use(express.json());


app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you sent the wrong inputs" })
    return;
  }
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({ msg: "todo created" });
}
)


app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos
  })


})

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updatetodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you sent the wrong inputs" })
    return;
  }
  await Todo.update({
    _id: req.body.id
  }, {
    completed: true
  })

  res.json({
    msg: "Todo marked as completed"
  })

})


app.listen(port, () => { console.log(`Todo app listening on port ${port}`) });
