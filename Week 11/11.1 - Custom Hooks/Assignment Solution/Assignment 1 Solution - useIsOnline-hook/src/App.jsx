// Import the useIsOnline custom hook from the hooks folder
import useIsOnline from "./hooks/useIsOnline";

// App component to display the online status of the user using the useIsOnline custom hook
function App() {
  // Call the useIsOnline hook to get the current online status
  const isOnline = useIsOnline();

  // Render the online status
  return (
    <div>
      <h1>Custom Hook - useIsOnline</h1> {/* Header for the custom hook demo */}

      {/* Display online status message based on the value of isOnline */}
      <h3>You are currently {isOnline ? "Online🟢" : "Offline🔴"}</h3>
    </div>
  );
}

// Export the App component as default to use it in other files 
export default App; 