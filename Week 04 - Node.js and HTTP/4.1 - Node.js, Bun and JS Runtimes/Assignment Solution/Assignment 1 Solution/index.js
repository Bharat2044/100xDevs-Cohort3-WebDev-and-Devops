/*
Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file

Command - `node index.js count_words filePath`
*/

// import fs module
const fs = require("fs");

// import commander module
// const { Command } = require("commander");
// const program = new Command();
const { program } = require("commander");

// set the name, description and version of the program using the program object of commander module
program.name("counter").description("CLI to do file based tasks").version("0.8.0");

program
    .command("count_words")
    .description("Count the number of words in a file")
    .argument("<file>", "file to count the number of words")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                // let words = 0;

                // for (let i = 0; i < data.length; i++) {
                //     if (data[i] === " ") {
                //         words++;
                //     }
                // }

                // words++;

                const words = data.split(" ").length;
                console.log(`You have ${words} words in this file`);                
            }
        });
    });

program.parse();
