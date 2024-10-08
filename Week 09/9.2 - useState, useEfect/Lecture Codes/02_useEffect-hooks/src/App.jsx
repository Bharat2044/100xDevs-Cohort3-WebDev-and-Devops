// Import the useState and useEffect hooks from the React library
import { useState, useEffect } from "react";

// Create a functional component called App to serve as the root component
function App() {
    return (
        <div>
            <h1>React Hooks</h1>

            {/* Render the Counter component inside the App component */}
            <Counter />
        </div>
    );
}

// Create a functional component called Counter to handle counting functionality
function Counter() {
    // Create a state variable called 'count' and a setter function 'setCount' to update its value
    const [count, setCount] = useState(0);

    // Use the useEffect hook to run side effects in function components
    useEffect(() => {

        // Initialize a setInterval to increment the 'count' state variable every second (1000 ms)
        setInterval(() => {
            
          // Use the functional form of setCount to ensure we are working with the latest value of 'count'
            // setCount((count) => count + 1);
            setCount(function (count) {
                return count + 1;
            });
        }, 1000);

        // Log a message when the component mounts
        console.log("Mounted");
    }, []); // Pass an empty dependency array to run this effect only once, when the component mounts

    // Return the JSX to render the current value of 'count' in an <h1> tag
    return (
        <div>
            {/* Display the current count value */}
            <h1>{count}</h1>
        </div>
    );
}

// Export the App component as the default export so it can be imported elsewhere
export default App;
