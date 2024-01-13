const zod = require("zod");

const createTodo = zod.object({
  titile: zod.string(),
  description: zod.string()
})


const updateTodo = zod.object({
  id: zod.string()
})

module.exports = {
  createTodo: createTodo,
  updatetodo: updateTodo
}
