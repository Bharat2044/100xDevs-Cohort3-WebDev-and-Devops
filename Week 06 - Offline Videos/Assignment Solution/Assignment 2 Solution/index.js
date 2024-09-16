/**
 * Assignment #2 - Write a function that takes a jwt as input and returns 
 * true if the jwt can be DECODED (not verified). Return false otherwise
 */


// Import jwt and zod library
const jwt = require("jsonwebtoken");

// function to decode the jwt token
function decodeJwt(token) {
    // decode the jwt token
    const decoded = jwt.decode(token); 

    // if the jwt token is decoded then return true otherwise return false
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

// call the decodeJwt function with the jwt token
const ans = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJoYXJhdEBnbWFpbC5jb20ifQ.1");

// print the ans to the console
console.log(ans);
