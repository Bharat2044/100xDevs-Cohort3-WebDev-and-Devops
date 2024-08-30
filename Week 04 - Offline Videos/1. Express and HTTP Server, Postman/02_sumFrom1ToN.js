// import express module using require function and store it in express variable
const express = require('express');

// create an express application using express function
const app = express();

// create a function to calculate the sum of numbers from 1 to n
function sumFrom1ToN(n) {
    // return n * (n + 1) / 2;

    // initialize sum variable to store the sum of numbers from 1 to n
    let sum = 0;

    // loop through numbers from 1 to n and add them to sum
    for (let i = 1; i <= n; i++) {
        // add i to sum
        sum = sum + i;
    }

    // return the sum of numbers from 1 to n
    return sum;
}

/**
 * create a route for the root URL
 * 
 * Query Parameters: It is a way to send data to the server as key-value pairs. It is appended to the URL after a question mark (?).
 * Example: http://localhost:3000/?n=5
 * Here n is the key and 5 is the value. n is query parameter and 5 is the value of n.
 * Use req.query to access the query parameters in the request object.
 * 
 * If you want to add multiple query parameters, you can separate them with an ampersand (&).
 * Example: http://localhost:3000/?a=5&b=10&c=15
 * Here a, b, and c are query parameters and 5, 10, and 15 are their respective values.
 */
app.get("/", function(req, res) {
    // get the value of n from the query parameters using req.query object
    const n = req.query.n;

    // call the sumFrom1ToN function and pass n as an argument to calculate the sum of numbers from 1 to n and store it in sum variable
    const sum = sumFrom1ToN(n);

    // send the response to the client with the sum of numbers from 1 to n
    // res.send("Your sum is: " + sum);
    res.send("<h1>Your sum is: " + sum + "</h1>");
});

// Start the server on port 3000
app.listen(3000);