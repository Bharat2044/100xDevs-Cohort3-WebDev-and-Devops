// Create promisified version of  fs.readFile

// import the fs module
const fs = require('fs');

// function to create a promisified version of fs.readFile 
function promisifiedReadFile(path) {
        // return a promise that resolves after the file is read
        return new Promise((resolve, reject) => {
            // read the file from the given path
            fs.readFile(path, 'utf8', (error, data) => {
                // if the file is read successfully, resolve the promise with the data
                if (!error) {
                    resolve(data);
                } else {
                    // if the file read fails, reject the promise with the error
                    reject(error);
                }
            });
        }
    );
}

// call the promisifiedReadFile function with the path of the file to read
promisifiedReadFile('a.txt')
    .then((data) => console.log(data))
    .catch((error) => console.log(error));