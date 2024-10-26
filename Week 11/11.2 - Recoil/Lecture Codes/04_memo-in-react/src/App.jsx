import { useState, useEffect, memo } from "react";

// Create a App component that renders in the root element
function App() {
    return (
        <div>
            {/* Render the Counter component */}
            <Counter />
        </div>
    );
}

// Counter component that manages the count state
function Counter() {
    const [count, setCount] = useState(0);

    // useEffect to set up an interval that increments the count every 3 seconds
    useEffect(() => {
        // Set up an interval to increment the count
        const interval = setInterval(() => {
            setCount((c) => c + 1); // Increment count by 1
        }, 3000);

        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return (
        <div>
            {/* Display the current count */}
            <CurrentCount count={count} />

            {/* Render the Increase component and pass setCount as prop */}
            <Increase setCount={setCount} />

            {/* Render the Decrease component and pass setCount as prop */}
            <Decrease setCount={setCount} />
        </div>
    );
}

// Memoized CurrentCount component to prevent unnecessary re-renders
const CurrentCount = memo(function({ count }) {

    // Return the current count value
    return (
        // Display the current count value
        <h1>{count}</h1> 
    );
});

// Memoized Decrease component that renders a button to decrease the count
const Decrease = memo(function({ setCount }) {
    // Function to handle the decrease action
    function decrease() {
        setCount((c) => c - 1); // Decrement count by 1
    }

    // Return the button to trigger the decrease function
    return (
        // Button to trigger the decrease function 
        <button onClick={decrease}>Decrease</button>
    ); 
});

// Memoized Increase component that renders a button to increase the count
const Increase = memo(function({ setCount }) {
    // Function to handle the increase action 
    function increase() {
        // Increment the count by 1
        setCount((c) => c + 1); 
    }

    // Return the button to trigger the increase function
    return (
        // Button to trigger the increase function
        <button onClick={increase}>Increase</button>
    ); 
});

// Export the App component as the default export to make it available in other parts of the application
export default App;
