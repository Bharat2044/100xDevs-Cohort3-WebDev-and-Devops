/*
function createComplexDomElement() {
  const div = document.createElement("div");
  div.innerHTML = "<h1> hi there </1h>";
  document.querySelector("body").appendChild(div);
}
*/

// 1st Approach
function addTodo() {
  const value = document.querySelector("input").value;

  const newTodoDiv = document.createElement("div");
  // newTodoDiv.innerHTML = value;

  newTodoDiv.innerHTML = "<span>" + value + "</span> <button>Delete</button>";

  document.querySelector("body").appendChild(newTodoDiv);
}