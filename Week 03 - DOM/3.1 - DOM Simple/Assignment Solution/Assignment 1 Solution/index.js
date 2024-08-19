// When the user clicks on the Add `todo button`, a new TODO should be added.



// Function to add a new TODO
function addTodo() {
    // Get the input element and store it in a variable called input
    const input = document.querySelector("input");

    // get the value of the input element and store it in a variable called value
    const value = input.value;

    // Check if the value is not empty or only whitespace characters 
    if (value.trim()) {
        // Create a new div element and store it in a variable called element
        const element = document.createElement("div");

        // Set the inner text of the element to the value
        element.innerText = value;

        // Append the element to the body of the document 
        document.querySelector("body").appendChild(element);
    } else { 
        alert("Please write something in the input field!");
    }
}