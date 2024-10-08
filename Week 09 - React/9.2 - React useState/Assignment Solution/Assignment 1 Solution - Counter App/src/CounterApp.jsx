// Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define the CounterApp component
const CounterApp = () => {
    // Initialize count with value from local storage or default to 0
    const [count, setCount] = useState(() => {
        // Get saved count from local storage
        const savedCount = localStorage.getItem("count");

        // Return the saved count if it exists, otherwise return 0
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    // useEffect to update local storage whenever count changes
    useEffect(() => {
        localStorage.setItem("count", count); // Save the current count to local storage
    }, [count]); // Runs only when count changes

    // Function to increment count
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1); // Increase the count by 1
    };

    // Function to decrement count
    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1); // Decrease the count by 1
    };

    return (
        <div>
            {/* Display the current count */}
            <h2>Count: {count}</h2>

            {/* Button to increment count and call incrementCount function when clicked */}
            <button onClick={incrementCount}>Increment</button>

            {/* Button to decrement count and call decrementCount function when clicked */}
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};

// Export the CounterApp component as the default export to be used in other components
export default CounterApp;
