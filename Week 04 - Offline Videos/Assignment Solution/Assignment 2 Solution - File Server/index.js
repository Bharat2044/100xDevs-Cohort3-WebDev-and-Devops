/*
Assignment #2 - You need to create an express HTTP server in Node.js which will handle the logic of a file server.

-  Use built in Node.js `fs` module
   The expected API endpoints are defined below,

1. GET /files - Returns a list of files present in `./files/` directory
   Response: 200 OK with an array of file names in JSON format.
   Example: GET http://localhost:3000/files

2. GET /file/:filename - Returns content of given file by name
   Description: Use the filename from the request path parameter to read the file from `./files/` directory
   Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
   Example: GET http://localhost:3000/file/example.txt

For any other route not defined in the server return 404
*/

// import fs module using require function and store it in fs variable
const fs = require("fs");

// import path module using require function and store it in path variable
const path = require("path");

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// get the path of the files directory using path.join function and store it in filesDir variable
const filesDir = path.join(__dirname, "./files/");

// Define the route to get the list of files
app.get("/files", (req, res) => {

    // Read the files in the files directory
    fs.readdir(filesDir, (err, files) => {
        // If there is an error, send a 500 status code
        if (err) {
            return res.status(500).json({ error: "Failed to retrieve Files" });
        }

        // Send the list of files as a JSON response
        res.json(files);
    });
});

// Define the route to get the content of a file
app.get("/file/:filename", (req, res) => {
    // get the filename from the request parameters and store it in filename
    const filename = req.params.filename;

    // get the path of the file using path.join function and store it in filePath variable 
    const filePath = path.join(filesDir, filename);

    // Read the content of the file
    fs.readFile(filePath, "utf8", (err, data) => {
        // If there is an error, send a 404 status code
        if (err) {
            return res.status(404).send("File not found");
        }

        // Send the content of the file as the response
        res.send(data);
    });
});

// Define the route for any other request
// app.all("*", (req, res) => {
//     // Send a 404 status code for any other request
//     res.status(404).send("Route Not Found");
// });

/*
app.use((req, res) => {
    // Send a 404 status code for any other route
    res.status(404).send("Route Not Found");
});
*/

// Start the server on port 3000
app.listen(3000);
