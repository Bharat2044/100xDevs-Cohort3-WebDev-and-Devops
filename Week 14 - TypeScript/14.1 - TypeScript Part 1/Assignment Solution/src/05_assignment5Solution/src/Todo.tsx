// Define the type for a single todo
export interface TodoType {
    title: string; // The title of the todo item
    description: string; // A brief description of the todo item
    done: boolean; // Indicates whether the todo item is completed
}

// Props for the Todo component
interface TodoInput {
    todo: TodoType; // A single todo object passed as a prop
}

// Functional component to render a single todo
function Todo({ todo }: TodoInput) {

    // Return JSX to render the todo item
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            {/* Display the title of the todo */}
            <h1>{todo.title}</h1>
            
            {/* Display the description of the todo */}
            <p>{todo.description}</p>
            
            {/* Display the status of the todo (Completed or Pending) */}
            <p>
                <strong>Status:</strong> {todo.done ? "Completed" : "Pending"}
            </p>
        </div>
    );
}

// Export the Todo component for use in other files or components
export default Todo; 
