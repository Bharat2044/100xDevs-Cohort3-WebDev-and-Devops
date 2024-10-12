// Import the useState and useEffect hooks from react
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named count and a function to update it named setCount
    const [count, setCount] = useState(0);

    // useEffect hook to update the count state every 5 seconds 
    useEffect(() => {
        // setInterval function to update the count state every 5 seconds
        const interval = setInterval(() => {
            setCount(prev => prev + 1); // Update the count state by 1
        }, 5000);

        // Return a cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once when the component mounts

    // return JSX that will be rendered
    return (
        <div style={{ background: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
            {/* Display the count state in a div */}
            <div
                style={{
                    background: "red",
                    borderRadius: 30,
                    width: 30,
                    height: 30,
                    paddingLeft: 10,
                    paddingTop: 5,
                    position: "relative",
                    left: 12,
                }}
            >
                {count}
            </div>

            {/* Add an image */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                style={{
                    width: 30,
                    height: 30,
                }}
            />
        </div>
    );
}

// Export the App component to use it in the other files
export default App;