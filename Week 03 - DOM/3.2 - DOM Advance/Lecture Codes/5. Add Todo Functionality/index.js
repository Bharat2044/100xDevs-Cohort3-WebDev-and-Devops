let todos = [];

function addTodo() {
  todos.push({
    title: document.querySelector("input").value,
  });

  render();
}

function createTodoComponent(todo) {
  const spanEle = document.createElement("span");
  spanEle.innerHTML = todo.title;

  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);

  return divEle;
}

function render() {
  document.querySelector("#todos").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const element = createTodoComponent(todos[i]);

    document.querySelector("#todos").appendChild(element);
  }
}
