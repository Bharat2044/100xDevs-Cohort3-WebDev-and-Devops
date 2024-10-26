// Import RecoilRoot, useRecoilValue, and useSetRecoilState from the recoil package 
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Import the counterAtom atom from the store/atoms/counter file
import { counterAtom } from "./store/atoms/counter";

// Create a App component that renders in the root element 
function App() {
    // Return the Counter component wrapped in a RecoilRoot component to provide the Recoil state to the Counter component
    return (
        // Wrap the Counter component in a RecoilRoot component to provide the Recoil state to the Counter component
        <RecoilRoot>
            {/* Render the Counter component */}
            <Counter />
        </RecoilRoot>
    );
}

// Create a Counter component that renders the CurrentCount, Increase, and Decrease components
function Counter() {
    // Return the CurrentCount, Increase, and Decrease components
    return (
        <div>
            {/* Render the CurrentCount component */}
            <CurrentCount />

            {/* Render the Increase component */}
            <Incrase />

            {/* Render the Decrease component */}
            <Decrease />
        </div>
    );
}

// Create a CurrentCount component that displays the current count value
function CurrentCount() {
    // Use the useRecoilValue hook to get the current count value from the counterAtom atom and store it in the count variable
    const count = useRecoilValue(counterAtom);

    // Return the current count value
    return (
        // Display the current count value in an h2 element
        <h2>{count}</h2>
    );
}

// Create a Decrease component that decrements the count value by 1
function Decrease() {
    // Use the useSetRecoilState hook to update the count value in the counterAtom atom and store it in the setCount variable
    const setCount = useSetRecoilState(counterAtom);

    // Create a function that decrements the count value by 1 
    function decrease() {
        // Update the count value by decrementing it by 1 
        setCount(count => count - 1);
    }
    
    // Return a button that decrements the count value when clicked
    return (
        // Display a button that decrements the count value when clicked 
        <button onClick={decrease}>Decrease</button>
    );
}

// Create a Incrase component that increments the count value by 1
function Incrase() {
    // Use the useSetRecoilState hook to update the count value in the counterAtom atom and store it in the setCount variable 
    const setCount = useSetRecoilState(counterAtom);

    // Create a function that increments the count value by 1
    function increase() {
        // Update the count value by incrementing it by 1 
        setCount(count => count + 1);
    }
    
    // Return a button that increments the count value when clicked
    return (
        // Display a button that increments the count value when clicked
        <button onClick={increase}>Increase</button>
    );
}

// Export the App component as the default export to make it available in other parts of the application
export default App;
