// import the fs module
const fs = require("fs");

// read the file a.txt synchronously and print the content
// let contents = fs.readFileSync("a.txt", "utf8"); // synchronous
// console.log(contents);

// function to read the file asynchronously
function print(err, data) {
    console.log(data);
}

// read the file a.txt asynchronously and print the content
// file path, encoding, callback function
fs.readFile("a.txt", "utf8", print); // asynchronous

// read the file b.txt asynchronously and print the content
fs.readFile("b.txt", "utf8", print); // asynchronous

console.log("Done!");


// fs.readFile("a.txt", "utf-8", function (err, contents) {
//     console.log(contents);
// });