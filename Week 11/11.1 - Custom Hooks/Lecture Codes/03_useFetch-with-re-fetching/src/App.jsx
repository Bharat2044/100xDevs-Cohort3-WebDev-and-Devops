// Import the useState hook from the react module
import { useState } from "react";

// Import the useFetch custom hook from the hooks folder
import useFetch from "./hooks/useFetch";

// Create a function component named App that serves as the main application component
function App() {
    // Declare a state variable named currentPost and a function to update it named setCurrentPost using the useState hook
    const [currentPost, setCurrentPost] = useState(1);

    // Call the useFetch custom hook to fetch the post data from the API endpoint and store it in the finalData state variable and the loading state variable 
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 5000);

    // If the data is still loading, display a loading message to the user
    if (loading) {
        // Return the JSX for the loading message
        return <div>Loading...</div>;
    }

    // Return the JSX for the component
    return (
        <div>
            {/* Create buttons to switch between posts */}
            <button onClick={() => setCurrentPost(1)}>1</button>
            <button onClick={() => setCurrentPost(2)}>2</button>
            <button onClick={() => setCurrentPost(3)}>3</button>

            {/* Display the post data */}
            <p>{JSON.stringify(finalData)}</p>
        </div>
    );
}

// Export the App component as the default export from this module
export default App;
