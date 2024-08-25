# **Week 04 - 4.1 | Node.js, Bun and JS Runtimes**


## Assignments #1 - Create a cli
[Assignment 1 Link](https://petal-estimate-4e9.notion.site/Assignments-1-Create-a-cli-edb2413bc3064646b97ad9a3b57923e0)

Or 

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

```js
Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file
```

Library to use - [https://www.npmjs.com/package/commander](https://www.npmjs.com/package/commander)

<details>
<summary>Solution</summary>

```js
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();
```
</details>


## Assignment #2 - Filesystem based todo list.
[Assignment 2 Link](https://petal-estimate-4e9.notion.site/Assignment-2-43739c004e7f4d0e82ad8aa422a6e0c9)

Or 

Create a `cli` that lets a user

1. Add a todo
2. Delete a todo
3. Mark a todo as done

Store all the data in files (todos.json)