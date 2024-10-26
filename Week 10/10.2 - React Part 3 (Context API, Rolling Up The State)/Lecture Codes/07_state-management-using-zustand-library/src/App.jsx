// Import Parent component from the Parent.js file 
import Parent from "./Parent";

// Define the App component as a functional component to render the Parent component inside a div element 
function App() {
    // Render the Parent component inside a div element 
    return (
        <div>
            {/* Render the Parent component */}
            <Parent />
      </div>
    );
};

// Export the App component as the default export of this file to use it in other files
export default App;
