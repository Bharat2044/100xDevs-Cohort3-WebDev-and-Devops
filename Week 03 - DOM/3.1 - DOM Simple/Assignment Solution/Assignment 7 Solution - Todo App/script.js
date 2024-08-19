let counter = 1;

// Function to add a new to-do item
function addTodo() {
  const input = document.querySelector("#input");
  const value = input.value;

  if (value.trim()) {
    const list = document.querySelector("#list");
    const todoDiv = createTodoElement(value);

    list.appendChild(todoDiv);

    counter++;
    input.value = ""; // Clear the input field
  } else {
    alert("Please write something in the input field!");
  }
}

// Function to create a new to-do element
function createTodoElement(value) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "todo-item";

  const inputElement = createInputElement(value);
  const updateBtn = createUpdateButton(inputElement);
  const deleteBtn = createDeleteButton(todoDiv);

  todoDiv.appendChild(inputElement);
  todoDiv.appendChild(updateBtn);
  todoDiv.appendChild(deleteBtn);

  return todoDiv;
}

// Function to create an input element
function createInputElement(value) {
  const inputElement = document.createElement("input");

  inputElement.type = "text";
  inputElement.value = value;
  inputElement.readOnly = true;
  inputElement.id = "todo-" + counter;

  return inputElement;
}

// Function to create an update button
function createUpdateButton(inputElement) {
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Edit";
  
    updateBtn.onclick = function () {
      if (inputElement.readOnly) {
        inputElement.readOnly = false;
        updateBtn.textContent = "Save";
        inputElement.focus(); // Focus on the input field
        inputElement.style.outline = "1px solid #007BFF"; // Add blue focus color
      } else {
        inputElement.readOnly = true;
        updateBtn.textContent = "Edit";
        inputElement.style.outline = "none"; // Remove focus outline
      }
    };
  
    return updateBtn;
  }
  

// Function to create a delete button
function createDeleteButton(todoDiv) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    const list = document.querySelector("#list");
    list.removeChild(todoDiv);
  };

  return deleteBtn;
}
