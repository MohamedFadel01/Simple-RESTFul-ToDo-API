require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const logger = require("morgan");
const pool = require("./dbConnection.js");
const todoRouter = require("./routes/todoRouter.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");

const app = express();

app.use(express.json());
app.use(logger("short"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", todoRouter);

app.use(errorMiddleware);

pool.connect((err, client, done) => {
  if (err) {
    console.error("Error connecting to database: ", err.message);
    return;
  }

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
});
