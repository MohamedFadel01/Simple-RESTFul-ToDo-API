# Todo App

This is a simple Todo application built with Node.js and Express.js. It allows users to perform CRUD operations on Todo items stored in a PostgreSQL database.

## Features

- **Create**: Add new Todo items.
- **Read**: View all Todo items or a single Todo item by ID.
- **Update**: Modify existing Todo items.
- **Delete**: Remove Todo items from the list.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_URL>
   
2. Install dependencies:
   ```bash
   npm install
   
3. Set up the environment variables by creating a .env file and adding the following variables:
   ```bash
   DATABASE_USER=your_database_user
   DATABASE_PASSWORD=your_database_password
   DATABASE=todo_database
   HOST=localhost
   DATABASE_PORT=5432
   NODE_ENV=development
   
4. Create the PostgreSQL database and table by running the commands in database.sql.

## Usage 
  To start the server, run:
  ```bash
  npm start
  ```
  The server will start listening on port 3000 by default.

## Endpoints
- **GET /api/todos****: Get all Todo items.
- **GET /api/todos/:id**: Get a single Todo item by ID.
- **POST /api/todos**: Add a new Todo item.
- **PUT /api/todos**: Update an existing Todo item.
- **DELETE /api/todos/:id**: Delete a Todo item by ID.
