// import the fs module
const fs = require("fs");

// read the contents of the file a.txt and store it in the variable contents1 synchronously using the readFileSync method
const contents1 = fs.readFileSync("a.txt", "utf8");
// print the contents of the file a.txt
console.log(contents1);

// read the contents of the file b.txt and store it in the variable contents2 synchronously using the readFileSync method
const contents2 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents2);

// read the contents of the file b.txt and store it in the variable contents3 synchronously using the readFileSync method
const contents3 = fs.readFileSync("b.txt", "utf-8");
// print the contents of the file b.txt
console.log(contents3);
