// Import the useContext hook from React to allow components to consume context values
import { useContext } from "react";

// Import CountContextProvider and CountContext from the file where they are defined, 
// to use context in the component tree
import { CountContextProvider, CountContext } from "./CountContextProvider";

// Define the main App component that will wrap the entire app in the CountContextProvider
function App() {
    // Return JSX to wrap the Counter component inside CountContextProvider 
    // which will provide the context values to its child components
    return (
        <CountContextProvider>
            {/* Counter component that will consume context values */}
            <Counter />
        </CountContextProvider>
    );
}

// Define the Counter component which renders other components that interact with the count context
function Counter() {
    // Return JSX structure containing other components that will consume the CountContext values
    return (
        <div>
            {/* Display the current count value */}
            <CurrentCount />
            
            {/* Button to increase the count value */}
            <Incrase /> 

            {/* Button to decrease the count value */}
            <Decrease /> 
        </div>
    );
}

// Define the CurrentCount component to display the current value of 'count' from the context
function CurrentCount() {
    // Use useContext hook to extract 'count' from CountContext
    const { count } = useContext(CountContext);

    // Return JSX to display the current value of 'count' inside an h3 element
    return (
        <h3>Count: {count}</h3>
    );
}

// Define the Decrease component to render a button that decreases the count value
function Decrease() {
    // Use useContext hook to extract 'count' and 'setCount' from CountContext
    const { count, setCount } = useContext(CountContext);

    // Return JSX to render a button that decreases the count value by 1 when clicked
    return (
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    );
}

// Define the Incrase component (correct spelling: Increase) to render a button that increases the count value
function Incrase() {
    // Use useContext hook to extract 'count' and 'setCount' from CountContext
    const { count, setCount } = useContext(CountContext);

    // Return JSX to render a button that increases the count value by 1 when clicked
    return (
        <button onClick={() => setCount(count + 1)}>Increase</button>
    );
}

// Export the App component as the default export to make it available in other parts of the application
export default App;
