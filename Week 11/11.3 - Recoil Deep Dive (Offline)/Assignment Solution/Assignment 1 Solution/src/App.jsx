// Import the Suspense component from the 'react' package
import { Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";
// Import the RecoilRoot and useRecoilState hooks from the 'recoil' package

// Import the RecoilRoot and useRecoilState hooks from the 'recoil' package
import { RecoilRoot, useRecoilState } from "recoil";

// Import the atom family to manage state for individual todos
import { todosAtomFamily } from "./atoms";

// Define the App component to be rendered in the root element
function App() {
    // Return the JSX element
    return (
        // Wrap the MainApp component with the RecoilRoot to provide Recoil state management
        <RecoilRoot>
            {/* Render multiple Todo components with different IDs */}
            {/* Wrap the Todo components with the Suspense component to handle loading states */}
            <Suspense fallback={<p>Loading...</p>}>
                {/* Wrap the Todo components with the ErrorBoundary component to handle errors */}
                <ErrorBoundary>
                    <Todo id={1} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Todo id={2} />
                </ErrorBoundary>
            </Suspense>
        </RecoilRoot>
    );}

// Create a Todo component to render the individual todo items with the given ID as a prop
function Todo({ id }) {
    // Get the todo state and the setter function from the Recoil state using the useRecoilState hook
    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

    // Return the JSX structure for rendering the UI
    return (
        <>
            {/* Display the title and completed task of the todo */}
            {todo.title}
            {todo.completed ? " - Completed" : " - Incomplete"}

            {/* Add a line break between todos */}
            <br />
        </>
    );
}

// Export the App component as the default export for use in other files or components
export default App;
