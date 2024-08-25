// import fs module
const fs = require('fs');

// import path module
const path = require('path');

console.log(__dirname);

console.log(__dirname + '/index.js');

console.log(path.join(__dirname, 'index.js'));
