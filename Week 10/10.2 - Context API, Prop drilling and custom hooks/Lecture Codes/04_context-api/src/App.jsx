// Import useContext from react module
import { useContext } from "react";

// Import BulbContextProvider and BulbContext from BulbContextProvider.jsx file
import { BulbContextProvider, BulbContext } from "./BulbContextProvider";

// Import createContext and useState from react module
// const BulbContext = createContext();

// Create a function component named App that serves as the main application component
function App() {
    // Create a state variable named bulbOn and a function named setBulbOn to update the state variable
    // const [bulbOn, setBulbOn] = useState(true);

    return (
        // Wrap the Light component with BulbContextProvider component
        <BulbContextProvider>
            {/* Render the Light component */}
            <Light />
        </BulbContextProvider>

        // // This will not work because the BulbContext.Provider is not available in this file
        // // Wrap the Light component with BulbContext.Provider component
        // <BulbContext.Provider value={{
        //     bulbOn,
        //     setBulbOn,
        // }}>
        //     {/* Render the Light component */}
        //     <Light />
        // </BulbContext.Provider>
    );
}

// Create a function component named Light that renders the LightBulb and LightSwitch components
function Light() {
    // Return the JSX for the component
    return (
        // Render the LightBulb and LightSwitch components
        <div>
            {/* Render the LightBulb component */}
            <LightBulb />

            {/* Render the LightSwitch component */}
            <LightSwitch />
        </div>
    );
}

// Create a function component named LightBulb that displays the status of the bulb
function LightBulb() {
    // Use the useContext hook to access the value of bulbOn from the BulbContext
    const { bulbOn } = useContext(BulbContext);

    // Return the JSX for the component
    return (
        // Display the status of the bulb
        <div>
            {/* Display the status of the bulb using the ternary operator */}
            {bulbOn ? "Bulb is on" : "Bulb is off"}
        </div>
    );
}

// Create a function component named LightSwitch that toggles the status of the bulb
function LightSwitch() {
    // Use the useContext hook to access the value of bulbOn and setBulbOn from the BulbContext
    const { bulbOn, setBulbOn } = useContext(BulbContext);

    // Create a function named toggleBulb that toggles the status of the bulb
    function toggleBulb() {
        // Update the state of the bulbOn using the setBulbOn function to toggle the status of the bulb
        setBulbOn(!bulbOn);
    }

    // Return the JSX for the component
    return (
        // Display a button to toggle the status of the bulb
        <div>
            {/* Button to toggle the status of the bulb using the toggleBulb function */}
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App;
