/*
Defining your own async function

Q: Write a function that
    - Reads the contents of a file
    - Trims the extra space from the left and right
    - Writes it back to the file
*/


// import fs module
const fs = require("fs");

// function to clean the file contents
function cleanFile(filePath, cb) {
  
  return new Promise(function (resolve) {
    // reading the file 
    fs.readFile(filePath, "utf-8", function (err, data) {
      // trimming the data from left and right 
      data = data.trim();

      // writing the data back to the file 
      fs.writeFile(filePath, data, function () {
        resolve();
      });
    });
  });
}

// async function to solve the problem statement
async function solve() {
  // calling the cleanFile function with the file path as argument
  await cleanFile("a.txt");

  console.log("Done cleaning file");
}

// calling the async function
solve();
