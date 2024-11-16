// Import the Todo component and its type definition
import Todo, { TodoType } from "./Todo";

// App component to render a list of todos
function App() {
    // Example list of todos to render in the app
    const todos: TodoType[] = [
        { title: "Attend 100xDevs Class", description: "In this class we will learn TypeScript.", done: false },
        { title: "Go to Gym", description: "Let's go gym guys and build your Muscles", done: true },
        { title: "Write Code", description: "Clean up and improve code quality.", done: false },
    ];

    // Render the App component
    return (
        // Render the list of todos
        <div style={{ padding: "20px" }}>
            {/* Render the title of the app */}
            <h1>Todo List</h1>

            {/* Map over the todos and render each todo */}
            {todos.map((todo, index) => (
                // Render the Todo component and pass the todo as a prop to it
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

// Export the App component for use in other components or files 
export default App;