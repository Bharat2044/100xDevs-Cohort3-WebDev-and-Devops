# **Week 03 - 3.1 | DOM (Simple)**

### Assignment #1 - When the user clicks on the Add `todo button`, a new TODO should be added.
![images](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5b92f338-dd9d-4657-b581-d4c1f8124ca9%2FScreenshot_2024-08-17_at_5.36.33_PM.png?table=block&id=646b7954-5df6-413d-95a8-4dd0f62f679a&cache=v2)

### Assignment #2 - Fetching the first TODO (Assignment)

![images](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F96a53c36-b961-4adf-ae9f-38fd9ac4870e%2FScreenshot_2024-08-17_at_5.42.34_PM.png?table=block&id=3d216c96-4fc2-487c-a1af-a2eec7cca071&cache=v2)

```js
const firstTodo = document.querySelector("h4");
console.log(firstTodo.innerHTML);
```

### Assignment #3 - Fetching the second TODO (Assignment)

![images](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc6711776-eb43-4f83-aaa6-721da76c2292%2FScreenshot_2024-08-17_at_5.44.15_PM.png?table=block&id=e3469432-9cd6-4b65-b2d8-ee9401e6787e&cache=v2)

```js
const secondTodo = document.querySelectorAll("h4")[1];
console.log(secondTodo.innerHTML);
```

### Assignment #4 - Update the first todo’s contents

![images](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F241027ee-29ca-4aac-812c-58893d79ec4f%2FScreenshot_2024-08-17_at_5.42.34_PM.png?table=block&id=69409284-3277-4145-8498-26d479391e89&cache=v2)

```js
const firstTodo = document.querySelector("h4");
firstTodo.innerHTML = "Dont' take class";
```

### Assignment #5 - Add a `delete` button right next to the todo that deletes that `todo`

```js
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Todo list</h1>
  <div>
    <div id="todo-1">
      <h4>1. Take class</h4>
      <button onclick="deleteTodo(1)">delete</button>
    </div>
    <div id="todo-2">
      <h4>2. Go out to eat</h4>
      <button onclick="deleteTodo(2)">delete</button>
    </div>
  </div>
  <div>
    <input type="text"></input>
    <button>Add Todo</button>
  </div>
</body>

<script>
  function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
  }
</script>

</html>
```

### Assignment #6 - Write a function to add a TODO `text` to the list of todos

Steps -

1. Get the current text inside the input element
2. Create a new `div` element
3. Add the text `from` step 1 to the `div` element
4. Append the `div` to the todos list

```js
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Todo list</h1>
  <div id="todos">
    <div id="todo-1">
      <h4>1. Take class</h4>
      <button onclick="deleteTodo(1)">delete</button>
    </div>
    <div id="todo-2">
      <h4>2. Go out to eat</h4>
      <button onclick="deleteTodo(2)">delete</button>
    </div>
  </div>
  <div>
    <input id="inp" type="text"></input>
    <button onclick="addTodo()">Add Todo</button>
  </div>
</body>

<script>
  function addTodo() {
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);

  }
</script>
</html>
```
![images](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7f30661b-5052-4e15-9f94-1239b54ff2bf%2FScreenshot_2024-08-17_at_6.55.43_PM.png?table=block&id=f3a19c89-0824-49a3-801e-fb38bccab8b1&cache=v2)

### Assignment #7 - Create a Todo List App with Add, Update & Delete Functionality