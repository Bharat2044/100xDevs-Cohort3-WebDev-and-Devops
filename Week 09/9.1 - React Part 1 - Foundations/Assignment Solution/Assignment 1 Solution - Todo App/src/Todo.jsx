// Import the useState hook for state management.
import { useState } from "react"; 

// Import the TodoItem component for rendering individual todo items.
import TodoItem from "./TodoItem"; 

// Define the Todo component to manage the list of todos.
const Todo = () => {
    // State to store the list of todos. Each todo will have id, title, description, and done status.
    const [todos, setTodos] = useState([]); 
    
    // State to handle the input for the new todo title.
    const [todoTitle, setTodoTitle] = useState(""); 
    
    // State to handle the input for the new todo description.
    const [todoDescription, setTodoDescription] = useState(""); 

    // Function to handle adding a new todo.
    const handleAddTodo = () => {
        // Ensure both title and description are provided before adding the todo.
        if (todoTitle.trim() && todoDescription.trim()) {
            setTodos([
                ...todos, // Spread existing todos to keep previous entries.
                {
                    id: Date.now(), // Generate a unique id for the new todo using the current timestamp.
                    title: todoTitle.trim(), // Trim any whitespace from the title.
                    description: todoDescription.trim(), // Trim any whitespace from the description.
                    done: false, // New todos are initially marked as not done.
                },
            ]);

            // Reset input fields to empty after adding the todo.
            setTodoTitle(""); 
            setTodoDescription(""); 
        } else {
            alert("Title and description are required"); // Show an alert if either field is missing.
        }
    };

    // Function to update a todo by its id, replacing its title and/or description.
    const handleUpdateTodo = (id, updatedTodo) => {
        // Map through todos and update the matching todo with new data.
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
    };

    // Function to delete a todo by its id.
    const handleDeleteTodo = (id) => {
        // Filter out the todo with the matching id and set the updated list of todos.
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Function to toggle the 'done' status of a todo.
    const handleToggleDone = (id) => {
        // Map through todos, toggling the 'done' status of the matching todo.
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    };

    return (
        <div>
            <h1>Todo App</h1> {/* Header for the todo app. */}

            {/* Input field for adding a new todo's title */}
            <input 
                type="text" 
                value={todoTitle} // Bind input to the todoTitle state.
                onChange={(e) => setTodoTitle(e.target.value)} // Update todoTitle as the user types.
                placeholder="Title" // Placeholder text for the input field.
            />

            {/* Input field for adding a new todo's description */}
            <input
                type="text"
                value={todoDescription} // Bind input to the todoDescription state.
                onChange={(e) => setTodoDescription(e.target.value)} // Update todoDescription as the user types.
                placeholder="Description" // Placeholder text for the input field.
            />

            {/* Button to add a new todo */}
            <button onClick={handleAddTodo}>Add Todo</button>

            {/* Section to display the list of todos */}
            <div>
                {todos.length === 0 ? ( // Conditional rendering: show message if no todos are available.
                    <p>No todos</p> // Displayed when the todo list is empty.
                ) : (
                    todos.map((todo) => ( // Map through the todos array and render a TodoItem for each one.
                        <TodoItem
                            key={todo.id} // Provide a unique key for each item.
                            todo={todo} // Pass the todo data as props to TodoItem.
                            onUpdate={handleUpdateTodo} // Pass the update function as a prop.
                            onDelete={handleDeleteTodo} // Pass the delete function as a prop.
                            onToggleDone={handleToggleDone} // Pass the toggle done function as a prop.
                        />
                    ))
                )}
            </div>
        </div>
    );
};

// Export the Todo component for use in other parts of the application.
export default Todo; 
