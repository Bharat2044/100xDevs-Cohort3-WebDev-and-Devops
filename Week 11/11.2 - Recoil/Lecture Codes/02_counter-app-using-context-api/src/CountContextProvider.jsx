// Import CountContext and useState from react library to use context and manage state in functional components
import { createContext, useState } from "react";

// Create a new context named CountContext using createContext() method from react
const CountContext = createContext();

// Define a function component named CountContextProvider to manage the count state using useState hook
function CountContextProvider({ children }) {
    // Declare a state variable 'count' initialized to 0, and a state updater function 'setCount' to update the count value
    const [count, setCount] = useState(0);

    // Return the CountContext.Provider component with value prop set to an object containing count and setCount
    return (
        // Pass an object with count and setCount as value to the CountContext.Provider component to provide the context to its children
        <CountContext.Provider
            value={{
                count, // Pass the count state variable to the child components to access the count value from the context 
                setCount, // Pass the setCount state updater function to the child components to update the count value from the context
            }}
        >
            {/* Render the child components wrapped inside the CountContext.Provider component */}
            {children}
        </CountContext.Provider>
    );
}

// Export the CountContext and CountContextProvider components to use them in other files
export { CountContext, CountContextProvider };
