CREATE DATABASE todo_database;

CREATE TABLE IF NOT EXISTS todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo;
