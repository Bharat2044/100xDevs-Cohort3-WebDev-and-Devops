function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  // element.parentNode.removeChild(element);

  document.getElementById("todoParent").removeChild(element);
}


function deleteRandomTodo() {
  const element = document.querySelector("h2");
  const parentElement = element.parentNode;
  
  parentElement.removeChild(element);
}
