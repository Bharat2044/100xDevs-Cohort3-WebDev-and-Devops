// Import the useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named showTimer and a function to update it named setShowTimer
    const [showTimer, setShowTimer] = useState(true);

    // Use the useEffect hook to toggle the showTimer state after 5 seconds using setTimeout
    useEffect(() => {
        // Create a timeout that toggles the showTimer state after 5 seconds
        setInterval(() => {
            // Update the showTimer state by toggling its current value
            setShowTimer((currentValue) => !currentValue);
        }, 5000);
    }, []); // Empty dependency array means this runs once when the component mounts.

    // return JSX that will be rendered in the root element
    return (
        <div style={{ margin: 20, textAlign: "center" }}>
            {/* Display the title of the app */}
            <h1 style={{ color: "purple" }}>Countdown App</h1>

            {
                // Use the showTimer state to conditionally render the Timer component
                showTimer && <Timer />
            }
        </div>
    );
}

// Create a function component named Timer that will be rendered in the App component
function Timer() {
    // Create a state variable named seconds and a function to update it named setSeconds
    const [seconds, setSeconds] = useState(0);

    // Use the useEffect hook to update the seconds state every second using setInterval
    useEffect(() => {
        // Create an interval that increments the seconds state by 1 every second
        const clock = setInterval(() => {
            console.log("Mounted");

            // Update the seconds state by incrementing it by 1 every second
            setSeconds((prev) => prev + 1);
        }, 1000);

        // Return a cleanup function that clears the interval when the component unmounts
        return function () {
            clearInterval(clock);
        };
    }, []); // Empty dependency array means this runs once when the component mounts.

    // return JSX that will be rendered in the root element
    return <h3>{seconds} seconds elapsed</h3>;
}

// Export the App component to use it in other files
export default App;
