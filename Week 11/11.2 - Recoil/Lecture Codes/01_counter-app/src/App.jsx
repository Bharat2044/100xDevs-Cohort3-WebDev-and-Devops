// Importing the useState hook from React to manage state in functional components
import { useState } from "react";

// Main App component that serves as the entry point for the application
function App() {
    return (
        <div>
            {/* Rendering the Counter component inside the App component */}
            <Counter />
        </div>
    );
}

// Counter component that manages the count state
function Counter() {
    // Declaring a state variable 'count' initialized to 0, and 'setCount' function to update it
    let [count, setCount] = useState(0);

    return (
        <div>
            {/* Displaying the current count using the CurrentCount component */}
            <CurrentCount count={count} />

            {/* Button to increase the count, passing the setCount function to Incrase component */}
            <Incrase setCount={setCount} />

            {/* Button to decrease the count, passing the setCount function to Decrease component */}
            <Decrease setCount={setCount} />
        </div>
    );
}

// CurrentCount component that receives count as a prop and displays it
function CurrentCount({ count }) {

    // Returning the count value inside an h3 element
    return (
        // Displaying the count value
        <h3>Count: {count}</h3>
    );
}

// Decrease component that renders a button to decrease the count
function Decrease({ setCount }) {
    // Function to handle the decrease action
    function decrease() {
        // Updating the count by subtracting 1 using the setCount function
        setCount((c) => c - 1);
    }

    // Returning the button to decrease the count
    return (
        // Button to trigger the decrease function
        <button onClick={decrease}>Decrease</button>
    );
}

// Incrase component that renders a button to increase the count
function Incrase({ setCount }) {
    // Function to handle the increase action
    function increase() {
        // Updating the count by adding 1 using the setCount function
        setCount((c) => c + 1); // Time complexity: O(1), Space complexity: O(1)
    }

    // Returning the button to increase the count
    return (
        // Button to trigger the increase function
        <button onClick={increase}>Increase</button>
    ); 
}

// Exporting the App component as the default export to make it available in other parts of the application
export default App;
