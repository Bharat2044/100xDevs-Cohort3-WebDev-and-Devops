// Import FlexExample, GridExample and ResponsivenessExample components from the components folder in the src folder
import FlexExample from "./components/FlexExample";
import GridExample from "./components/GridExample";
import ResponsivenessExample from "./components/ResponsivenessExample";

// Create a functional component App that will be rendered in the root element
function App() {
    // Return the JSX of the App component
    return (
        <>
            {/* This div will have a background color of light blue */}
            <div className="bg-blue-200">Hi</div>

            {/* This div will have a background color of blue because we have changed the color of red-500 to blue in the tailwind.config.js file */}
            <div className="bg-red-500">Hi</div>

            {/* This div will have a background color of purple-800 and a border color of red-600 */}
            <div className="h-24 w-24 bg-purple-800 mt-3 ml-3 rounded-md border-2 border-red-600"></div>

            {/* Render the FlexExample Component in the App component */}
            <FlexExample />

            {/* Render the GridExample Component in the App component */}
            <GridExample />

            {/* Render the ResponsivenessExample Component in the App component */}
            <ResponsivenessExample />
        </>
    );
}

// Exporting the App component as default to be used in other components or files
export default App;
