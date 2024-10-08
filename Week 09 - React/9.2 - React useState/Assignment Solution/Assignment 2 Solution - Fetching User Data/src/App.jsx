// Import the UserData component from the UserData file
import UserData from "./UserData";

// Define the App component
function App() {
    return (
        <div>
            {/* Render the UserData component inside the div */}
            <UserData />
        </div>
    );
}

// Export the App component as the default export to be used in other components
export default App;
