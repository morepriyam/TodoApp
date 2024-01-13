// Make your own db.js file and add your mongodb link


const mongoose = require("mongoose");
mongoose.connect("add your own mongodb url");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = { Todo };
