// import fs module
const fs = require("fs");

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile("a1.txt", "utf-8", function (err, data) {
            if (err) {
                reject("File Not Found");
            } else {
                resolve(data);
            }
        });
    });
}

readFileAsync().then(function (data) {
    console.log("File read successfully!!");

    console.log(data);
}).catch(function (err) {
    console.log("Error occurred!!");
    
    console.log(err);
});