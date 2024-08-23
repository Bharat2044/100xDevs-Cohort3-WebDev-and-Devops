// import fs module
const fs = require("fs");

function readFileAsync() {
    return new Promise(function (resolve) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    });
}

async function solve() {
    let data = await readFileAsync(3000);

    console.log(data);
}

solve();
