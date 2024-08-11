// import the fs module
const fs = require("fs");

// function to read the file 
function readTheFile(sendTheFinalValueHere) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendTheFinalValueHere(data);
  });
}

// function to read the file and return its value
function readFile() {
  // read the file and return its value
  return new Promise(readTheFile);
}

// calling the function to read the file
const p = readFile();

// function to print the contents of the file
function callback(contents) {
  console.log(contents);
}

// using the eventual value returned by promise 
p.then(callback);
