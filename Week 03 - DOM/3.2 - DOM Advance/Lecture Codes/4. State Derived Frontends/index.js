let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });

  render();
}

function deleteFirstTodo() {
  // todos.splice(0, 1);
  // todos = todos.slice(1);
  todos.shift();

  render();
}

function deleteLastTodo() {
  // todos.splice(todos.length - 1, 1);
  // todos = todos.slice(0, todos.length - 1);
  // todos.length = todos.length - 1;
  todos.pop();

  render();
}

function createTodoComponent(todo) {
  const spanEle = document.createElement("span");
  spanEle.innerHTML = todo.title;

  const buttonEle = document.createElement("button");
  buttonEle.innerHTML = "Delete";

  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(buttonEle);

  return divEle;
}

function render() {
  document.querySelector("#todos").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i]);

    document.querySelector("#todos").appendChild(element);
  }
}
