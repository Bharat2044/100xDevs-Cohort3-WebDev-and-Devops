// Import useState hook from React module
import { useState } from "react";

// Import the usePrevious custom hook useHook library
import { usePrevious } from "@uidotdev/usehooks";

// Create a function component named UsePrevious 
function UsePrevious() {
    // Define a state variable named count and a function named setCount to update the state variable
    const [count, setCount] = useState(0);

    // Call the usePrevious hooks of useHook library to get the previous value of the count state variable
    const previousValue = usePrevious(count);

    // Return the JSX for the component
    return (
        <div>
            <h1>usePrevious Hook from useHook Library</h1>

            {/* Display the current value of the count state variable */}
            <p>Current Value: {count}</p>
            
            {/* Display the previous value of the count state variable */}
            <p>Previous Value: {previousValue}</p>

            {/* Button to increment the count state variable */}
            <button onClick={() => setCount(count + 1)}>Increment</button>

            {/* Button to decrement the count state variable */}
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

// Export the UsePrevious component as the default export from this module to use in other components 
export default UsePrevious;
