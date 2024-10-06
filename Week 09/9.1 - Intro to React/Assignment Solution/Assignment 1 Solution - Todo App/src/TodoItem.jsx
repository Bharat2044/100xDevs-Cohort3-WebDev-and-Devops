// Import the useState hook from React for managing local state.
import { useState } from 'react'; 

// Define the TodoItem component with props: todo, onUpdate, onDelete, and onToggleDone.
const TodoItem = ({ todo, onUpdate, onDelete, onToggleDone }) => { 
    
    // Local state to manage editing mode and store new title/description values.
    const [isEditing, setIsEditing] = useState(false); // State to track whether the item is currently being edited.
    const [newTitle, setNewTitle] = useState(todo.title); // State for the new title during editing, initialized with the current todo's title.
    const [newDescription, setNewDescription] = useState(todo.description); // State for the new description during editing, initialized with the current todo's description.

    // Function to handle updating the todo item.
    const handleUpdate = () => {
        // Invoke the onUpdate prop with the updated title and description.
        onUpdate(todo.id, { title: newTitle, description: newDescription });
        
        // Exit editing mode after saving changes.
        setIsEditing(false); 
    };

    return (
        // Display the todo item with conditional rendering based on editing mode.
        <div style={{ textDecoration: todo.done ? 'line-through' : 'none' }}> {/* Style the text with a strike-through if the todo is marked as done. */}
            
            {/* Conditional rendering to determine if the item is in editing mode. */}
            {isEditing ? ( // Conditional rendering to determine if the item is in editing mode.
                <>
                    {/* Input field for the todo title. */}
                    <input
                        type="text"
                        value={newTitle} // Bind input value to newTitle state.
                        onChange={(e) => setNewTitle(e.target.value)} // Update newTitle state as the user types.
                        placeholder="Title" // Placeholder text for the title input.
                    />

                    {/* Input field for the todo description. */}
                    <input
                        type="text"
                        value={newDescription} // Bind input value to newDescription state.
                        onChange={(e) => setNewDescription(e.target.value)} // Update newDescription state as the user types.
                        placeholder="Description" // Placeholder text for the description input.
                    />
                    
                    {/* Button to save the changes to the todo item. */}
                    <button onClick={handleUpdate}>Save</button> 

                    {/* Button to cancel editing and revert to display mode. */}
                    <button onClick={() => setIsEditing(false)}>Cancel</button> 
                </>
            ) : ( // Render the todo item in non-editing mode.
                <>
                    <h4>{todo.title}</h4> {/* Display the title of the todo item. */}
                    <p>{todo.description}</p> {/* Display the description of the todo item. */}
                    
                    <button onClick={() => setIsEditing(true)}>Edit</button> {/* Button to enable editing mode. */}
                    <button onClick={() => onDelete(todo.id)}>Delete</button> {/* Button to delete the todo item. */}
                    
                    {/* Button to toggle the done status of the todo item. */}
                    <button onClick={() => onToggleDone(todo.id)}> 
                        {todo.done ? 'Mark as Undone' : 'Mark as Done'} {/* Change button text based on the current done status. */}
                    </button>
                </>
            )}
        </div>
    );
};

// Export the TodoItem component for use in other parts of the application.
export default TodoItem; 
