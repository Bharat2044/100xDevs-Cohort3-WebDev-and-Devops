// import an external fs module
const fs = require('fs');

// read file a.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf-8"); // synchronous way of reading file

// print the contents of the file 
console.log(contents); 