// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents1 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents2 asynchronously using the readFile method
fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

// read the contents of the file b.txt and store it in the variable contents3 asynchronously using the readFile method
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
