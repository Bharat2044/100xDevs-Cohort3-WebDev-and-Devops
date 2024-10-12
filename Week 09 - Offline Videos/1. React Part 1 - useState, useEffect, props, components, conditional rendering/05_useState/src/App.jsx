// Import the useState hook from react
import { useState } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>

            {/* Call Counter component here to render it in the App component */}
            <Counter />
            
            {/* Call ToggleMessage component here to render it in the App component */}
            <ToggleMessage />
            <ToggleMessage />
        </div>
    );
}

// Create a function component named Counter to render it in the App component
const Counter = () => {
    // Create a state variable count and a function setCount to update the count
    const [count, setCount] = useState(0);

    // return JSX that will be rendered
    return (
        // Display the count and a button to increment the count
        <div style={{ margin: '0px 10px' }}>
            {/* Display the count */}
            <h2>Count: {count}</h2>

            {/* Create a button to increment the count */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

// Create a function component named ToggleMessage that will be rendered in the App component
const ToggleMessage = () => {
    // Create a state variable named notification and a function to update it named notificationCount
    const [notification, notificationCount] = useState(0);

    // Create a function named toggle that will be called when the button is clicked
    function toggle() {
        // Update the notification state by incrementing it by 1 using the notificationCount function
        notificationCount(notification + 1);
    }

    // return JSX that will be rendered
    return (
        <div>
            {/* Create a button element with an onClick event listener that calls the toggle function */}
            <button onClick={toggle} style={{ padding: 10, margin: 10, cursor: "pointer" }}>
                Increase Count
            </button>

            {/* Display the notification state in the div element */}
            {notification}
        </div>
    );
};

// Export the App component to use it in the other files
export default App;