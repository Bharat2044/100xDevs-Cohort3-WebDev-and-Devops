/*
Assignment #1 - Your logic is like a doctor
Learn by doing, lets create an in memory hospital

You need to create 4 routes (4 things that the hospital can do)

1. GET - User can check how many kidneys they have and their health
2. POST - User can add a new kidney
3. PUT - User can replace a kidney, make it healthy
4. DELETE - User can remove a kidney

1. What should happen if they try to delete when there are no kidneys?
2. What should happen if they try to make a kidney healthy when all are already healthy?
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Array to store users data
let users = [
    {
        name: "John",
        kidneys: [
            {
                healthy: false,
            },
        ],
    },
];

/**
 * Create a route handler for GET request
 * URL: http://localhost:3000/
 *
 *
 */
app.get("/", function (req, res) {
    // get the kidneys of the first user in the users array
    const johnKidneys = users[0].kidneys;
    // console.log(johnKidneys);

    // get the number of kidneys of the first user in the users array and store it in numberOfKidneys variable
    const numberOfKidneys = johnKidneys.length;

    /*
    // create a variable numberOfHealthyKidneys and set it to 0 to store the number of healthy kidneys
    const numberOfHealthyKidneys = 0;

    // loop through the kidneys of the first user in the users array
    for (let i = 0; i < numberOfKidneys; i++) {
        // if the kidney is healthy, increment the numberOfHealthyKidneys variable
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    */

    // calculate the number of healthy kidneys using filter method and store it in numberOfHealthyKidneys variable
    const numberOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;

    // calculate the number of unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    // send the response in JSON format with the number of kidneys, number of healthy kidneys and number of unhealthy kidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    });
});

/**
 * Create a route handler for POST request
 * URL: http://localhost:3000/
 * 
 *  Request Body - Send JSON data in the request body to add a new kidney to the user 
    {
       "isHealthy": true
    }

 * Add a new kidney for the user with the health status provided in the request body
 */
app.post("/", function (req, res) {
    // get the isHealthy value from the request body and store it in isHealthy variable
    const isHealthy = req.body.isHealthy;

    // add a new kidney to the first user in the users array with the isHealthy value from the request body
    users[0].kidneys.push({
        healthy: isHealthy,
    });

    // send the response in JSON format with a message that the "kidney added successfully"
    res.json({
        message: "Kidney Added Successfully!",
    });
});

/**
 * Create a route handler for PUT request
 * URL: http://localhost:3000/
 *
 * Update all the unhealthy kidney to healthy kidney, if there are no unhealthy kidney then return a 411 status code
 */
app.put("/", function (req, res) {
    // check if there is atleast one unhealthy kidney, then update all the unhealthy kidneys to healthy
    if (isThereAtleastOneUnhealthyKidney()) {
        // loop through the kidneys of the first user in the users array and set the healthy value of the kidney to true
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // set the healthy value of the kidney to true
            users[0].kidneys[i].healthy = true;
        }

        // send the response in JSON format with a message that the "kidney replaced successfully"
        res.json({
            message: "Kidney Replaced Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to replace"
        res.status(411).json({
            message: "You have no unhealthy kidney to replace",
        });
    }
});

/**
 * Create a route handler for DELETE request
 * URL: http://localhost:3000/
 *
 * Remove all the unhealthy kidney, if there are no unhealthy kidney then return a 411 status code
 */
app.delete("/", function (req, res) {
    // check if there is atleast one unhealthy kidney, then remove all the unhealthy kidneys
    if (isThereAtleastOneUnhealthyKidney()) {
        // create a new array to store the healthy kidneys
        const newKidneys = [];

        // loop through the kidneys of the first user in the users array and add the healthy kidneys to the new array
        for (let i = 0; i < users[0].kidneys.length; i++) {
            // if the kidney is healthy, add it to the new array of kidneys
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true,
                });
            }
        }

        // update the kidneys of the first user in the users array with the new array of kidneys
        users[0].kidneys = newKidneys;

        // send the response in JSON format with a message that the "unhealthy kidney is removed successfully"
        res.json({
            message: "Unhealthy Kidney Removed Successfully!",
        });
    } else {
        // send the response with status code 411 and a message that "You have no unhealthy kidney to remove"
        res.status(411).json({
            message: "You have no unhealthy kidney to remove",
        });
    }
});

// Helper function to check if there is atleast one unhealthy kidney
function isThereAtleastOneUnhealthyKidney() {
    // loop through the kidneys of the first user in the users array
    for (let i = 0; i < users[0].kidneys.length; i++) {
        // if the kidney is unhealthy, return true
        if (!users[0].kidneys[i].healthy) {
            return true;
        }
    }

    // if there is no unhealthy kidney, return false
    return false;
}

// Start the server on port 3000
app.listen(3000);
