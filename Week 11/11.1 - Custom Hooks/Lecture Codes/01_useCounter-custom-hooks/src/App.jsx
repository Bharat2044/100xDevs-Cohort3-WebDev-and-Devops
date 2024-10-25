// Import useState hook from react module
import { useState } from "react";

// Custom Hook - useCounter
// Create a custom hook called useCounter 
function useCounter() {
    // Create a state variable called count and a function to update it called setCount to manage the state of the count variable
    const [count, setCount] = useState(0);

    // function to increase the count by 1 
    function increaseCount() {
        // Increment the count state variable by 1 
        setCount(count + 1);
    }

    // Return the count and increaseCount function to be used in other components 
    return { count, increaseCount };
}

// Create a function component named App that serves as the main application component
function App() {

    // Return the JSX for the component 
    return (
        <div>
            {/* Render the Counter component */}
            <Counter />

            {/* Render the Counter component */}
            <Counter />
        </div>
    );
}

// Create a function component named Counter that displays a button to increase the count 
function Counter() {
    // Destructure the count and increaseCount function from the useCounter custom hook
    const { count, increaseCount } = useCounter();

    // Return the JSX for the component
    return (
        <div>
            {/* Display the count value */}
            <button onClick={increaseCount}>Increase {count}</button>
        </div>
    );
}

// Export the App component as the default export from this module
export default App;
