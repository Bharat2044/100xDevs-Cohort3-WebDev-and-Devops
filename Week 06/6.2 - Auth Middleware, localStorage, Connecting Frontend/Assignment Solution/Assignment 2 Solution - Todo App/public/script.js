// Navigation functions to switch between signup and signin views

// Show signup view and hide signin and todos views
function moveToSignup() {
    // Display the signup container
    document.getElementById("signup-container").style.display = "block";
    // Hide the signin container
    document.getElementById("signin-container").style.display = "none";
    // Hide the todos container
    document.getElementById("todos-container").style.display = "none";
}

// Show signin view and hide signup and todos views
function moveToSignin() {
    // Display the signin container
    document.getElementById("signin-container").style.display = "block";
    // Hide the signup container
    document.getElementById("signup-container").style.display = "none";
    // Hide the todos container
    document.getElementById("todos-container").style.display = "none";
}

// Show todos view and hide signup and signin views
function showTodoApp() {
    // Hide the signin container
    document.getElementById("signin-container").style.display = "none";
    // Hide the signup container
    document.getElementById("signup-container").style.display = "none";
    // Display the todos container
    document.getElementById("todos-container").style.display = "block";
    // Fetch and display the user's todos
    getTodos();
}

// Function to handle user signup
async function signup() {
    // Retrieve username and password from input fields
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    try {
        // Send a POST request to the signup endpoint
        const response = await axios.post("http://localhost:3000/signup", {
            username,
            password,
        });

        // Alert the user with the response message
        alert(response.data.message);

        // If signup is successful, switch to the signin view
        if (response.data.message === "You are signed up successfully!") {
            moveToSignin();
        }
    } catch (error) {
        // Log error if signup fails
        console.error("Error while signing up:", error);
    }
}

// Function to handle user signin
async function signin() {
    // Retrieve username and password from input fields
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    try {
        // Send a POST request to the signin endpoint
        const response = await axios.post("http://localhost:3000/signin", {
            username,
            password,
        });

        // If signin is successful, store the token and show the todo app
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            showTodoApp();
        } else {
            // Alert the user if signin fails
            alert(response.data.message);
        }
    } catch (error) {
        // Log error if signin fails
        console.error("Error while signing in:", error);
    }
}

// Function to handle user logout
async function logout() {
    // Remove token from localStorage to log out the user
    localStorage.removeItem("token");

    // Alert the user that they are logged out
    alert("You are logged out successfully!");

    // Switch to the signin view
    moveToSignin();
}

// Function to fetch and display To-Dos
async function getTodos() {
    try {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");

        // Send a GET request to fetch the user's todos
        const response = await axios.get("http://localhost:3000/todos", {
            headers: { Authorization: token },
        });

        // Get the todos list container
        const todosList = document.getElementById("todos-list");
        
        // Clear the current list of todos
        todosList.innerHTML = "";

        // If there are todos, create elements for each
        if (response.data.length) {
            response.data.forEach((todo) => {
                const todoElement = createTodoElement(todo);
                todosList.appendChild(todoElement);
            });
        }
    } catch (error) {
        // Log error if fetching todos fails
        console.error("Error while getting To-Do list:", error);
    }
}

// Function to add a new To-Do
async function addTodo() {
    // Get the value of the input field
    const inputElement = document.getElementById("input");
    const title = inputElement.value;

    // Check if the input is empty or just spaces
    if (title.trim() === "") {
        alert("Please write something to add to the To-Do list.");
        return;
    }

    try {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        // Send a POST request to add the new To-Do
        await axios.post(
            "http://localhost:3000/todos",
            { title },
            {
                headers: { Authorization: token },
            }
        );

        // Clear the input field after adding the To-Do
        inputElement.value = "";

        // Refresh the list of To-Dos
        getTodos();
    } catch (error) {
        // Log error if adding a new To-Do fails
        console.error("Error while adding a new To-Do item:", error);
    }
}

// Function to update an existing To-Do
async function updateTodo(id, newTitle) {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {
        // Send a PUT request to update the To-Do
        await axios.put(
            `http://localhost:3000/todos/${id}`,
            { title: newTitle },
            {
                headers: { Authorization: token },
            }
        );

        // Refresh the list of To-Dos
        getTodos();
    } catch (error) {
        // Log error if updating a To-Do fails
        console.error("Error while updating a To-Do item:", error);
    }
}

// Function to delete a To-Do
async function deleteTodo(id) {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {
        // Send a DELETE request to remove the To-Do
        await axios.delete(`http://localhost:3000/todos/${id}`, {
            headers: { Authorization: token },
        });

        // Refresh the list of To-Dos
        getTodos();
    } catch (error) {
        // Log error if deleting a To-Do fails
        console.error("Error while deleting a To-Do item:", error);
    }
}

// Function to mark a To-Do as done/undone
async function toggleTodoDone(id) {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {
        // Send a PUT request to toggle the To-Do status
        await axios.put(`http://localhost:3000/todos/${id}/done`, {
            headers: { Authorization: token },
        });

        // Refresh the list of To-Dos
        getTodos();
    } catch (error) {
        // Log error if toggling To-Do status fails
        console.error("Error while toggling To-Do status:", error);
    }
}

// Create a To-Do element for display
function createTodoElement(todo) {
    // Create a container div for the To-Do
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";

    // Create an input element for the To-Do title
    const inputElement = createInputElement(todo.title);
    inputElement.readOnly = true;

    // Create update, delete, and done checkbox elements
    const updateBtn = createUpdateButton(inputElement, todo.id);
    const deleteBtn = createDeleteButton(todo.id);
    const doneCheckbox = createDoneCheckbox(todo.done, todo.id, inputElement);

    // Append the created elements to the To-Do container
    todoDiv.appendChild(inputElement);
    todoDiv.appendChild(doneCheckbox);
    todoDiv.appendChild(updateBtn);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

// Create an input element for To-Do title
function createInputElement(value) {
    // Create an input element
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = value;
    inputElement.readOnly = true;

    return inputElement;
}

// Create an update button for a To-Do
function createUpdateButton(inputElement, id) {
    // Create an update button
    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Edit";

    // Handle button click
    updateBtn.onclick = function () {
        if (inputElement.readOnly) {
            // Make input editable and change button text to "Save"
            inputElement.readOnly = false;
            updateBtn.textContent = "Save";
            inputElement.focus(); // Focus on the input field
            inputElement.style.outline = "1px solid #007BFF"; // Add blue focus color
        } else {
            // Make input read-only and change button text to "Edit"
            inputElement.readOnly = true;
            updateBtn.textContent = "Edit";
            inputElement.style.outline = "none"; // Remove focus outline
            // Update the To-Do with new title
            updateTodo(id, inputElement.value);
        }
    };

    return updateBtn;
}

// Create a delete button for a To-Do
function createDeleteButton(id) {
    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Handle button click
    deleteBtn.onclick = function () {
        // Delete the To-Do
        deleteTodo(id);
    };

    return deleteBtn;
}

// Function to mark a To-Do as done/undone
async function toggleTodoDone(id, done) {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    try {
        // Send the updated status of the To-Do (done/undone) to the server
        await axios.put(
            `http://localhost:3000/todos/${id}/done`,
            { done: !done }, // Toggle the done state
            {
                headers: { Authorization: token },
            }
        );

        // Refresh the To-Do list to reflect the changes
        getTodos();
    } catch (error) {
        // Log error if toggling To-Do status fails
        console.error("Error while toggling To-Do status:", error);
    }
}

// Create a checkbox to mark a To-Do as done/undone
function createDoneCheckbox(done, id, inputElement) {
    // Create a checkbox element
    const doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.checked = done;

    // Set the text decoration based on the current done state
    inputElement.style.textDecoration = done ? "line-through" : "none";

    // Handle checkbox change
    doneCheckbox.onchange = function () {
        // Toggle the To-Do status and update text decoration
        toggleTodoDone(id, done); // Pass the current done state
        inputElement.style.textDecoration = doneCheckbox.checked ? "line-through" : "none"; // Update text decoration based on checkbox state
    };

    return doneCheckbox;
}
