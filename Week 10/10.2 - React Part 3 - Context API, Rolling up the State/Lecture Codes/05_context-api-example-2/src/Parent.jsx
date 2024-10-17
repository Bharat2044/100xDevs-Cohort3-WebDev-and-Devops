// Import the useContext hook from the React library to consume context values
import { useContext } from "react";

// Import CountContextProvider and CountContext from the external file where the context is defined
import { CountContextProvider, CountContext } from "./CountContextProvider";

// Define the Parent component that will wrap child components inside the CountContextProvider
function Parent() {
    // Return JSX to render child components within the CountContextProvider
    return (
        // Use CountContextProvider to make the context available to child components
        <CountContextProvider>
            {/* Render the Increase button component */}
            <Incrase />
            
            {/* Render the Decrease button component */}
            <Decrease />

            {/* Render the Value display component */}
            <Value />
        </CountContextProvider>
    );
}

// Define the Decrease component that will consume the context values using useContext
function Decrease() {
    // Destructure 'count' and 'setCount' from the CountContext to access the state and its updater
    const { count, setCount } = useContext(CountContext);

    // Return a button that decreases the count value when clicked
    return (
        // Use the setCount updater function to decrease the count value by 1 when the button is clicked 
        <button onClick={() => setCount(count - 1)}>
            Decrease
        </button>
    );
}

// Define the Incrase (misspelled "Increase") component that will consume the context values using useContext
function Incrase() {
    // Destructure 'count' and 'setCount' from the CountContext to access the state and its updater
    const { count, setCount } = useContext(CountContext);

    // Return a button that increases the count value when clicked
    return (
        // Use the setCount updater function to increase the count value by 1 when the button is clicked 
        <button onClick={() => setCount(count + 1)}>
            Increase
        </button>
    );
}

// Define the Value component that will consume the 'count' value from the context and display it
function Value() {
    // Destructure 'count' from the CountContext to access the current count value
    const { count } = useContext(CountContext);
    
    // Return a paragraph element to display the current count value
    return (
        // Display the current count value using the 'count' variable from the context
        <p>Count: {count}</p>
    );
}

// Export the Parent component as the default export so it can be used in other files
export default Parent;
