// Import the useState hook from react
import { useState } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named count and a function to update it named setCount
    const [count, setCount] = useState(1);

    // Create a function named increaseCount that will increase the count state by 1
    function increaseCount() {
        // Call the setCount function to update the count state by 1
        setCount(count + 1);
    }

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

            {/* Add a button that will call the increaseCount function when clicked */}
            <button
                onClick={increaseCount}
                style={{
                    marginLeft: 10,
                    padding: 10,
                    borderRadius: 5,
                    cursor: "pointer",
                }}
            >
                Increase the Count
            </button>
        </div>
    );
}

// Export the App component to use it in the other files
export default App;
