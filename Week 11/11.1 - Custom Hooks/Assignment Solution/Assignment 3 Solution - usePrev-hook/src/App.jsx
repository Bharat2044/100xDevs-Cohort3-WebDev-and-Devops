// Import the CustomUsePrevious component in the App component
import CustomUsePrevious from "./CustomUsePrevious";

// Import the UsePreviousFromuseHooks component in the App component
import UsePreviousFromuseHooks from "./UsePreviousFromuseHooks";

// Create a function component named App that serves as the main application component
function App() {

    // Return the JSX for the component
    return (
        <div>
            {/* /Render the CustomUsePrevious component */}
           <CustomUsePrevious />

            {/* Render the UsePreviousFromuseHooks component */}
            <UsePreviousFromuseHooks />
        </div>
    );
}

// Export the App component as the default export from this module
export default App;
