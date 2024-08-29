/*
Assignment #1 - Trying to code a todo app and store data into the array
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// To store the todos in memory, create an empty array
let todos = [];

/**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */
app.post("/todos/create", (req, res) => {
    // get the todo from the request body
    const { todo } = req.body;

    // get the todo id from the request body and convert it to integer
    const id = parseInt(req.body.id);

    if (!id) {
        return res.send("Id cannot be empty");
    }

    // check if todo already exists with the given id
    for (let i = 0; i < todos.length; i++) {
        // if todo already exists with the given id, send a response with message "Todo already exists with id" and the todo id
        if (todos[i].id === id) {
            return res.send("Todo already exists with id " + id);
        }
    }

    // if todo is empty, send a response with message "Todo cannot be empty"
    if (!todo || todo.trim() === "") {
        return res.send("Todo cannot be empty");
    }

    // create a new todo object
    const newTodo = {
        title: todo,
        id: id,
    };

    // add the new todo object to the todos array
    todos.push(newTodo);

    // send a response with message "Todo added successfully"
    res.send("Todo added successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete all the todos from the array
 *
 * URL: localhost:3000/todos/delete/all
 * Example: localhost:3000/todos/delete/all
 */
app.delete("/todos/delete/all", (req, res) => {
    // delete all the todos from the array
    todos = [];

    // send a response with message "All todos deleted successfully"
    res.send("All todos deleted successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete the todos with the given id from the array
 *
 * URL: localhost:3000/todo/delete/:id
 * Example: localhost:3000/todo/delete/1
 */
app.delete("/todos/delete/:id", function (req, res) {
    // get the todo id from the request parameters and convert it to integer
    const todoId = parseInt(req.params.id);

    // create a deleted variable and set it to false
    let deleted = false;

    // create a tempTodos array to store the todos after deleting the todo with the given id
    const tempTodos = [];

    // find the todo with the given id from the todos array and delete it
    for (let i = 0; i < todos.length; i++) {
        // if todo is found with the given id, set deleted to true and skip adding it to tempTodos
        if (todos[i].id === todoId) {
            deleted = true;
            continue; // skip adding this todo to tempTodos
        }

        // add the todo to tempTodos array
        tempTodos.push(todos[i]);
    }

    // if todo is not found with the given id, send a response with message "Todo not found with id" and the todo id
    if (!deleted) {
        return res.send("Todo not found with id " + todoId);
    }

    // update the todos array with the temporary array
    todos = tempTodos;

    // send a response with message "Todo deleted successfully with id" and the todo id
    res.send("Todo deleted successfully with id " + todoId);
});

/**
 * create a route handler for PUT (Update) request
 *
 * Update the todos with the given id in the array
 *
 * URL: localhost:3000/todo/update/:id
 * Example: localhost:3000/todo/update/1
 */
app.put("/todos/update/:id", function (req, res) {
    // get the todo and todo id from the request body and parameters
    const { todo } = req.body;

    // get the todo id from the request parameters and convert it to integer
    const todoId = parseInt(req.params.id);

    // if todo is empty, send a response with message "Todo cannot be empty"
    if (!todo || todo.trim() === "") {
        return res.send("Todo cannot be empty");
    }

    // create a updated variable and set it to false
    let updated = false;

    // find the todo with the given id from the todos array and update the title
    for (let i = 0; i < todos.length; i++) {
        // if todo is found with the given id, update the title and set updated to true
        if (todos[i].id === todoId) {
            todos[i].title = todo;
            updated = true;
        }
    }

    // if todo is not found with the given id, send a response with message "Todo not found with id" and the todo id
    if (!updated) {
        return res.send("Todo not found with id " + todoId);
    }

    // send a response with message "Todo updated successfully with id" and the todo id
    res.send("Todo updated successfully with id " + todoId);
});

/**
 * create a route handler for GET (Read) request
 *
 * Read all the todos from the array
 *
 * URL: localhost:3000/todo/read/all
 * Example: localhost:3000/todo/read/all
 */
app.get("/todos/read/all", function (req, res) {
    // if no todos are found, send a response with message "No todos found"
    if (todos.length === 0) {
        return res.send("No todos found");
    }

    // send the todos array as response
    res.send(todos);
});

/**
 * create a route handler for GET (Read) request
 *
 * Read the todos with the given id from the array
 *
 * URL: localhost:3000/todos/read/:id
 * Example: localhost:3000/todos/read/1
 */
app.get("/todos/read/:id", function (req, res) {
    // get the todo id from the request parameters and convert it to integer
    const todoId = parseInt(req.params.id);

    // find the todo with the given id from the todos array
    const todo = todos.find((todo) => todo.id === todoId);

    // if todo is not found, send a response with message "Todo not found with id" and the todo id
    if (!todo) {
        return res.send("Todo not found with id " + todoId);
    }

    // send the todo as response
    res.send(todo);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
