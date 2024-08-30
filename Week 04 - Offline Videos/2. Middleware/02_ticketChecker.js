// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;

    if (ticket === "free") {
        next();
    } else {
        res.status(403).send("Access denied");
    }
}

app.use(ticketChecker);

app.get("/ride1", function () {
    res.send("You rode the first ride!");
});

app.get("/ride2", function () {
    res.send("You rode the first ride!");
});

app.get("/ride3", function () {
    res.send("You rode the first ride!");
});

// Start the server on port 3000
app.listen(3000);
