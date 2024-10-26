// Importing counterAtom and evenSelector from the store module
import { counterAtom, evenSelector } from "./store/counter";

// Importing necessary functions from Recoil for state management
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Main App component that serves as the entry point for the application
function App() {
    return (
        <div>
            {/* Wrapping the application in RecoilRoot to provide Recoil state management */}
            <RecoilRoot>
                {/* Rendering the Buttons, Counter, and IsEven components */}
                <Buttons /> 
                <Counter /> 
                <IsEven /> 
            </RecoilRoot>
        </div>
    );
}

// Buttons component that provides controls to increase and decrease the count
function Buttons() {
    // useSetRecoilState hook to get the setter function for counterAtom
    const setCount = useSetRecoilState(counterAtom);

    // Function to increase the count by 2
    function increase() {
        setCount((c) => c + 2); // Updating state by adding 2 to the current count
    }

    // Function to decrease the count by 1
    function decrease() {
        setCount((c) => c - 1); // Updating state by subtracting 1 from the current count
    }

    return (
        <div>
            {/* Button to trigger the increase function when clicked */}
            <button onClick={increase}>Increase</button>
           
            {/* Button to trigger the decrease function when clicked */}
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

// Counter component that displays the current count
function Counter() {
    // useRecoilValue hook to get the current value of counterAtom
    const count = useRecoilValue(counterAtom);

    return (
        <div>
            <h2>Count: {count}</h2> {/* Displaying the current count value */}
        </div>
    );
}

// IsEven component that checks if the count is even and displays the result
function IsEven() {
    // useRecoilValue hook to get the computed value from evenSelector
    const isEven = useRecoilValue(evenSelector);

    return (
        <div>
            {/* Displaying whether the count is even or not */}
            <h3>Is Even: {isEven ? "Yes" : "No"}</h3>
        </div>
    );
}

// Exporting the App component as the default export to make it available in other parts of the application
export default App;
