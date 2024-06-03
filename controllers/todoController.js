const pool = require("../dbConnection");

//get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    if (!todos.rows.length) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(todos.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

//get a single todo item by id
const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    if (!todo.rows.length) {
      res.status(404).json({ message: "Not found" });
    }
    console.log(todo.rows);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

//add a todo
const addTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    if (!newTodo.rows.length) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(201).json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

//update a todo
const updateTodo = async (req, res) => {
  try {
    const todo = req.body;
    console.log(todo);
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [todo.description, todo.id]
    );
    console.log(updatedTodo);
    if (!updatedTodo.rows.length) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

//delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1 RETURNING *",
      [id]
    );
    if (!deletedTodo.rows.length) {
      res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(deletedTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};