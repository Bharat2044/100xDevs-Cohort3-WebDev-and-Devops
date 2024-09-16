// Import jwt module
const jwt = require("jsonwebtoken");

// value to be encoded
const value = {
    name: "Bharat",
    accountNumber: 1234567890,
};

// generate token with value and secret key using jwt.sign() method
const token = jwt.sign(value, "secret");

// print token to console
console.log(token);

// decode token using jwt.decode() method
const decodedValue = jwt.decode(token);

// print decoded value to console
console.log(decodedValue);

// verify token using jwt.verify() method
const verifiedValue = jwt.verify(token, "secret");

// print decoded value to console
console.log(verifiedValue);
