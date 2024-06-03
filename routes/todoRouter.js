const express = require("express");
const {
  addTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getAllTodos);

router.get("/:id", getTodo);

router.post("/", addTodo);

router.put("/", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
