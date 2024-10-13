// Import createContext and useState from react module
import { createContext, useState } from "react";

// Create a context named BulbContext using createContext
const BulbContext = createContext();

// Create a function component named BulbContextProvider that serves as the context provider
function BulbContextProvider({ children }) {
    // Create a state variable named bulbOn and a function named setBulbOn to update the state variable
    const [bulbOn, setBulbOn] = useState(true);

    // Return the BulbContext.Provider component with the value prop set to an object containing bulbOn and setBulbOn
    return (
        // BulbContext.Provider component with the value prop set to an object containing bulbOn and setBulbOn
        <BulbContext.Provider
            value={{
                bulbOn,
                setBulbOn,
            }}
        >
            {/* children prop to render the child components */}
            {children}
        </BulbContext.Provider>
    );
}

// Export the BulbContextProvider and BulbContext as named exports
export { BulbContextProvider, BulbContext };
