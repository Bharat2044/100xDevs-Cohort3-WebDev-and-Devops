// Add a `delete` button right next to the todo that deletes that `todo`



// function to delete a todo item 
function deleteTodo(index) {
    // get the todo item by index and store it in a variable called todo
    const element = document.querySelector(`#todo-${index}`);

    // remove the todo item from the DOM
    // element.remove();

    // remove the todo item from the DOM
    element.parentNode.removeChild(element);
}