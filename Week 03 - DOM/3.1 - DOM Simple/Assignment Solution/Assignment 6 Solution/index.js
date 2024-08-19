/**
Write a function to add a TODO `text` to the list of todos

Steps -
    1. Get the current text inside the input element
    2. Create a new `div` element
    3. Add the text `from` step 1 to the `div` element
    4. Append the `div` to the todos list
 */



// funcction to add a todo
function addTodo() {
    // get the input element
    const input = document.querySelector('input');

    // get the value of the input element
    const value = input.value;

    // check if the input value is not empty
    if (value.trim()) {
        // get the list element
        const list = document.querySelector('#todos-list');

        // create a new div element
        const todoDiv = document.createElement('div');

        // add the text to the div element
        todoDiv.textContent = value;

        // append the div element to the list
        list.appendChild(todoDiv);
    } else {
        // show an alert if the input value is empty
        alert('Please write something in the input field!');
    }
}