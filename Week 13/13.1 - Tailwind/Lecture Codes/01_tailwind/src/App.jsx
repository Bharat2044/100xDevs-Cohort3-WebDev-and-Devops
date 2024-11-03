import FlexExample from "./FlexExample";
import GridExample from "./GridExample";
import ResponsivenessExample from "./ResponsivenessExample";

// Create a functional component App that will be rendered in the root element
function App() {
    // Return the JSX of the App component
    return (
        <>
            {/* This div will have a background color of light blue */}
            <div className="bg-blue-200">Hi</div>

            {/* This div will have a background color of blue because we have changed the color of red-500 to blue in the tailwind.config.js file */}
            <div className="bg-red-500">Hi</div>

            <div className="h-24 w-24 bg-purple-800 mt-3 ml-3 rounded-md border-2 border-red-600"></div>

            <FlexExample />

            <GridExample />

            <ResponsivenessExample />
        </>
    );
}

// Exporting the App component as default to be used in other components or files
export default App;
