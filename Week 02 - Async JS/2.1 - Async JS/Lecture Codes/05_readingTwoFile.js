// fs is stands for file system used to read and write files in your local system 

// import an external fs module
const fs = require('fs');

// read file a.txt & b.txt and store its content in contents variable
const contents = fs.readFileSync("a.txt", "utf8") + fs.readFileSync("b.txt", "utf-8");

// print the contents of the file 
console.log(contents); 

// read file a.txt and store its content in contents1 variable
const contents1 = fs.readFileSync("a.txt", "utf8"); 

// read file b.txt and store its content in contents2 variable
const contents2 = fs.readFileSync("b.txt", "utf8");

// print the contents of the file
console.log(contents1); 
console.log(contents2);


