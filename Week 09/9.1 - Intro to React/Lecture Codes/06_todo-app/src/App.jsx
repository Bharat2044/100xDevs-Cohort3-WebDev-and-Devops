// Import useState hook from React for managing state
import { useState } from "react"; 

// Import the CSS file for styling
import "./App.css"; 

function App() {
    // Define the state 'todos' and its setter 'setTodos', initializing with one todo item
    const [todos, setTodos] = useState([
        {
            title: "Go to gym", // Title of the todo item
            description: "Hi the gym regularly", // Description of the todo item
            done: false, // Boolean to track whether the task is done or not
        },
    ]);

    // Function to add a new todo item
    function addTodo() {
        /*
        // let newArray = [...todos];

        // Create a new array to hold updated todos (alternative way to spread operator)
        let newArray = [];

        // Loop through existing todos and add them to the new array
        for (let i = 0; i < todos.length; i++) {
            newArray.push(todos[i]);
        }

        // Push a new todo object into the array with title, description, and done properties
        newArray.push({
            title: document.getElementById("title").value, // Get the title input from the DOM
            description: document.getElementById("description").value, // Get the description input from the DOM
            done: true, // Mark the new task as done
        });

        // Update the 'todos' state with the new array of todos
        setTodos(newArray);
        */

        // Update the 'todos' state using the spread operator to add a new todo item
        setTodos([
            ...todos, // Spread the existing todos array
            {
                title: document.getElementById("title").value, // Get the title input from the DOM
                description: document.getElementById("description").value, // Get the description input from the DOM
                done: false, // Mark the new task as not done
            },
        ]);
    }

    // Return the JSX to render the component
    return (
        <div>
            <h1>Todo App</h1> {/* Header for the app */}

            {/* Input field for the todo title */}
            <input id="title" type="text" placeholder="Enter Todo Title" /> 

            {/* Input field for the todo description */}
            <input id="description" type="text" placeholder="Write Todo Description" /> 

            {/* Button to trigger the addTodo function */}
            <button onClick={addTodo}>Add Todo</button> 

            <br />

            {/* Display the todos array as a JSON string */}
            {/* {JSON.stringify(todos)}  */}

            {/* Map through the todos array and render each todo item using the Todo component */}
            {
              todos.map((todo, index) => (
                <Todo 
                  key={index} // Unique key for each todo component
                  title={todo.title} // Pass the title prop to the Todo component
                  description={todo.description} // Pass the description prop to the Todo component
                  done={todo.done} // Pass the done status to the Todo component
                />
            ))}
        </div>
    );
}

// Functional component to display each todo item
function Todo(props) {
    return (
        <div>
            <h3>{props.title}</h3> {/* Display the title of the todo */}
            <p>{props.description}</p> {/* Display the description of the todo */}
            <p>{props.done ? "Task is Done" : "Task is Not Done"}</p> {/* Conditional rendering to display if task is done */}
        </div>
    );
}

// Export the App component as default
export default App; 
