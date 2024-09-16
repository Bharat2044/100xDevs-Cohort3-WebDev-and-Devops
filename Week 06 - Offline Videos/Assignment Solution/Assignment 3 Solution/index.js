/**
 * Assignment #3 - Write a function that takes a jwt as input and returns
 * true if the jwt can be VERIFIED. Return false otherewise
 */

// Import jwt and zod library
const jwt = require("jsonwebtoken");

// define the jwt secret key
const jwtPassword = "secret";

// function to verify the jwt token
function verifyJwt(token) {

    // try catch block to handle the error while verifying the jwt token
    try {
        // verify the jwt token with the secret key
        const verified = jwt.verify(token, jwtPassword);

        // if the jwt token is verified then return true
        return true;
    } catch (error) {
        // if the jwt token is not verified then return false
        return false;
    }
}

// call the verifyJwt function with the jwt token
const ans = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJoYXJhdEBnbWFpbC5jb20ifQ.1");

// print the ans to the console
console.log(ans);
