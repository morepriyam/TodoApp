import express, { json } from "express";
import { createTodo, updatetodo } from "./types";
const app = express();
const port = 3000;
app.use(json());
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);;
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you sent the wrong inputs" })
    return;
  }
  // put in mongo db
})
app.get("/todos", (req, res) => {


})

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updatetodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({ msg: "you sent the wrong inputs" })
    return;
  }

})


app.listen(port);
