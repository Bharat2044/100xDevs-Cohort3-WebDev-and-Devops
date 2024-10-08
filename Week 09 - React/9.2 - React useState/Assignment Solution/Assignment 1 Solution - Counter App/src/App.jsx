// Import the CounterApp component
import CounterApp from "./CounterApp"; 

// Define the App component 
function App() {
    return (
        <div>
          {/* Main heading for the app */}
            <h1>Counter App</h1> 

            {/* Render the CounterApp component */}
            <CounterApp /> 
        </div>
    );
}

// Export the App component as the default export to be used in other components
export default App; 
