// Import useState and useEffect hooks from React module
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element 
function App() {

    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render MyComponent inside App component */}
            <MyComponent />
        </div>
    );
}

// Create a function component named MyComponent that will be rendered inside App component
function MyComponent() {
    // useState hook initializes count state with 0 and provides setCount to update it
    const [count, setCount] = useState(0);

    // useEffect hook runs when the component mounts or the count state changes
    useEffect(() => {
      // Logs on mount and count change
        console.log("Component mounted or count updated");  
    }, [count]);  // Dependency array with count ensures this runs when count changes

    // useEffect hook runs only once when the component mounts and cleans up when it unmounts
    useEffect(() => {
      // Logs when the component has mounted
        console.log("Component mounted");  
        
        // Return a cleanup function to run when the component unmounts 
        return () => {
            console.log("Component will unmount");  // Logs when the component is about to unmount
        };
    }, []);  // Empty dependency array ensures this runs only on mount and unmount

    // Return JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Display the current count from state */}
            <p>Count: {count}</p>
            
            {/* Button to increment the count by updating state */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App; 
