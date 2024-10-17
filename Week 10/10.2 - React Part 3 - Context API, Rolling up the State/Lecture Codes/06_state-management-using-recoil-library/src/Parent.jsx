/*
RecoilRoot: Provides the Recoil state context to the component tree
atom: Used to define a unit of state (atom)
useRecoilValue: Hook to read the value of an atom
useSetRecoilState: Hook to update the value of an atom
useRecoilState: Hook to read and update the value of an atom in one step
*/

// Import the RecoilRoot component, atom function, and necessary hooks from the Recoil library
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

// Define an atom named 'count' to store the state with an initial value of 0
const count = atom({
    key: "countState", // 'key' is a unique identifier for the atom, used to differentiate it from other atoms/selectors
    default: 0, // 'default' is the initial value of the atom, set to 0
});

// Define the Parent component, which acts as the main container for child components
function Parent() {
    // Return JSX that wraps the child components within RecoilRoot to provide Recoil state management
    return (
        // RecoilRoot provides context for Recoil state to all child components
        <RecoilRoot>
            {/* Render the Increase component */}
            <Incrase />

            {/* Render the Decrease component */}
            <Decrease />

            {/* Render the Value component */}
            <Value />
        </RecoilRoot>
    );
}

// Define the Decrease component to handle decreasing the count value
function Decrease() {
    // useSetRecoilState is used to access the setter function to update the 'count' atom's value
    const setCount = useSetRecoilState(count);

    // Return a button that, when clicked, decreases the count value by 1
    return (
        // When the button is clicked, the count value is decreased by 1 using the setCount function
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    );
}

// Define the Incrase component to handle increasing the count value
function Incrase() {
    // useSetRecoilState is used to access the setter function to update the 'count' atom's value
    const setCount = useSetRecoilState(count);

    // Return a button that, when clicked, increases the count value by 1
    return (
        // When the button is clicked, the count value is increased by 1 using the setCount function
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>

        // Alternative approaches
        /*
        // Option 1: useRecoilValue reads the value of the 'count' atom, and useSetRecoilState updates the atom
        // This version reads the value and passes it directly to the setter
        const setCount = useSetRecoilState(count); // Setter function to update the 'count' atom value
        const countValue = useRecoilValue(count); // Value of the 'count' atom to be updated
        return (
            // When the button is clicked, the count value is increased by 1 using the setCount function
            <button onClick={() => setCount(countValue + 1)}>
                Increase
            </button>
        );
        */

        /*
        // Option 2: useRecoilState provides both the value and setter in one call
        // This approach simplifies the state management by reading and updating the atom at the same time
        const [countValue, setCount] = useRecoilState(count); // Array destructuring to get the value and setter function
        return (
            // When the button is clicked, the count value is increased by 1 using the setCount function
            <button onClick={() => setCount(countValue + 1)}>
                Increase
            </button>
        );
        */
    );
}

// Define the Value component to display the current count value
function Value() {
    // useRecoilValue is used to read the current value of the 'count' atom without the need for updating it
    const countValue = useRecoilValue(count);

    // Return a paragraph element to display the current count value
    return (
        <p>
            {/* Display the current count value using the countValue variable */}
            Count: {countValue}
        </p>
    );
}

// Export the Parent component as the default export so it can be used in other files
export default Parent;
