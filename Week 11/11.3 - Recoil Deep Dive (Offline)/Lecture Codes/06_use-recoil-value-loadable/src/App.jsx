// Import the RecoilRoot and useRecoilValueLoadable hooks from the 'recoil' package
import { RecoilRoot, useRecoilValueLoadable } from "recoil";

// Import the atom family to manage state for individual todos
import { todosAtomFamily } from "./atoms";

// import { Suspense } from "react";

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
        </RecoilRoot>
    );
}

// Create a Todo component to render the individual todo items with the given ID as a prop
function Todo({ id }) {
    // Get the todo value from the Recoil state using the useRecoilValueLoadable hook
    const todo = useRecoilValueLoadable(todosAtomFamily(id));

    // Check if the todo is loading
    if (todo.state === "loading") {
        // Return a loading message while the todo is being fetched
        return <p>Loading...</p>;
    } else if (todo.state === "hasError") {
        // Return an error message if there was an error fetching the todo
        return <p>Error while fetching data from backend : {todo.contents.message}</p>;
    } else if (todo.state === "hasValue") {
        // Return the JSX structure for rendering the UI
        return (
            <>
                {/* Display the title and description of the todo */}
                {todo.contents.title}
                {todo.contents.description}

                {/* Add a line break between todos */}
                <br />
            </>
        );
    }
}

// Export the App component as the default export for use in other files or components
export default App;


/*
// Another way to handle errors using ErrorBoundary and Suspense in React
function App() {
    return (
        <RecoilRoot>
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorBoundary>
                    <Todo id={1} />
                    <Todo id={2} />
                    <Todo id={2} />
                    </Suspense>
                </ErrorBoundary>
        </RecoilRoot>
    );
}
*/