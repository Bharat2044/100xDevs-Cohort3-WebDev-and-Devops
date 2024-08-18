let counter = 1;

function addTodo() {
  const inputEle = document.querySelector("input");
  const value = inputEle.value;

  const newDivEle = document.createElement("div");
  newDivEle.setAttribute("id", "todo-" + counter);
  
  newDivEle.innerHTML =
  "<div>" +
  value +
  "</div><button onclick='deleteTodo(" +
  counter +
  ")'>Delete</button>";
  
  document.querySelector("body").appendChild(newDivEle);
  counter++;
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  const parentElement = element.parentNode;

  parentElement.removeChild(element);
}
