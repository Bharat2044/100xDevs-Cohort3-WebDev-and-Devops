// Import the RecoilRoot, useRecoilValue, and useSetRecoilState hooks from the 'recoil' package
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Import the atom family to manage state for individual todos
import { todosAtomFamily } from "./atoms";

// Import the useEffect hook from the 'react' package
import { useEffect } from "react";

// Define the App component to be rendered in the root element
function App() {

    // Return the JSX element
    return (
        // Wrap the MainApp component with the RecoilRoot to provide Recoil state management
        <RecoilRoot>
            {/* Render multiple Todo components with different IDs */}
            <Todo id={1} />
            <Todo id={2} />
            <Todo id={2} />

            {/* Render the UpdatorComponent to update the state of the second todo */}
            <UpdatorComponent />
        </RecoilRoot>
    );
}

// Define the UpdatorComponent to update the state of the second todo after 5 seconds
function UpdatorComponent() {
    // Get the set function to update the state of the second todo
    const updateTodo = useSetRecoilState(todosAtomFamily(2));

    // Use the useEffect hook to update the state of the second todo after 5 seconds
    useEffect(() => {
        // Update the state of the second todo after 5 seconds
        setTimeout(() => {
            // Update the state of the second todo with the new title and description
            updateTodo({
                id: 2,
                title: "Updated Title",
                description: "Updated Description"
            })
        }, 5000);
    });

    // Return an empty JSX element
    return <></>;
}

// Create a Todo component to render the individual todo items with the given ID as a prop
function Todo({ id }) {
    // Get the current todo state value using the useRecoilValue hook
    const currentTodo = useRecoilValue(todosAtomFamily(id));

    // Return the JSX structure for rendering the UI
    return (
        <>
            {/* Display the title and description of the todo */}
            {currentTodo.title}
            {currentTodo.description}

            {/* Add a line break between todos */}
            <br /> 
        </>
    );
}

// Export the App component as the default export for use in other files or components
export default App;
