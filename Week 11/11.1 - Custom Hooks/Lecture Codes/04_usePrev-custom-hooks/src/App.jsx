// Import useState hook from React module
import { useState } from "react";

// Import the usePrev custom hook from the hooks folder 
import usePrev from "./hooks/usePrev";

// Create a function component named App that serves as the main application component
function App() {
    // Define a state variable named count and a function named setCount to update the state variable
    const [count, setCount] = useState(0);

    // Call the usePrev custom hook to get the previous value of the count state variable
    const prev = usePrev(count);

    // Return the JSX for the component
    return (
        <div>
            {/* Display the current value of the count state variable */}
            <p>{count}</p>

            {/* Button to increment the count state variable */}
            <button onClick={() => setCount(count + 1)}>Increment</button>

            {/* Display the previous value of the count state variable */}
            <p>Previous Value: {prev}</p>
        </div>
    );
}

// Export the App component as the default export from this module
export default App;
