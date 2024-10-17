// Import the useCounterStore hook from the 'useCounterStore' file to access the counter store
import useCounterStore from "./useCounterStore";

// Define the Parent component that renders the Increase, Decrease, and Value components
function Parent() {
    // Return JSX structure that contains child components
    return (
        <div>
            {/* Render the Incrase component for incrementing the count */}
            <Incrase />

            {/* Render the Decrease component for decrementing the count */}
            <Decrease />

            {/* Render the Value component for displaying the current count */}
            <Value />
        </div>
    );
}

// Define the Incrase component to handle incrementing the count
function Incrase() {
    // Access the 'increase' function from the zustand store using the useCounterStore hook
    const increase = useCounterStore((state) => state.increase);

    // Return a button that, when clicked, calls the 'increase' function to increment the count
    return (
        // When the button is clicked, the count value is increased by 1 using the 'increase' function
        <button onClick={increase}>
            Increase
        </button>
    );
}

// Define the Decrease component to handle decrementing the count
function Decrease() {
    // Access the 'decrease' function from the zustand store using the useCounterStore hook
    const decrease = useCounterStore((state) => state.decrease);

    // Return a button that, when clicked, calls the 'decrease' function to decrement the count
    return (
        // When the button is clicked, the count value is decreased by 1 using the 'decrease' function
        <button onClick={decrease}>
            Decrease
        </button>
    );
}

// Define the Value component to display the current count value
function Value() {
    // Access the 'count' value from the zustand store using the useCounterStore hook
    const count = useCounterStore((state) => state.count);

    // Return a paragraph element that displays the current count value
    return (
        <p>
            {/* Display the current count value using the 'count' variable */}
            {count}
        </p>
    );
}

// Export the Parent component as the default export so it can be used in other files
export default Parent;
