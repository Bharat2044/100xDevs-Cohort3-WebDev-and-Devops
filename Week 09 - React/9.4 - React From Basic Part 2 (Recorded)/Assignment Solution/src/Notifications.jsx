// Import the useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Create a Notifications component that will be rendered in the App component
function Notifications() {
    
    // Create a state variable named notificationCount and a function to update it named setNotificationCount
    const [notificationCount, setNotificationCount] = useState(0);

    // Create a side effect that increments the notificationCount state every 5 seconds
    useEffect(() => {
        // Create an interval that increments the notificationCount state every 5 seconds
        const interval = setInterval(() => {
            // Update the notificationCount state by incrementing it by 1 every 5 seconds
            setNotificationCount((prevCount) => prevCount + 1);
        }, 5000); // Increments every 5 seconds

        // Cleanup the interval when component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run the side effect only once when the component mounts

    // return JSX that will be rendered
    return (
        // Create a div element with inline styles
        <div style={{ minHeight: "100vh", padding: 20 }}>
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
                {notificationCount}
            </div>

            {/* Add a div element */}
            <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Add an image */}
                <img
                    src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />

                {/* Add a paragraph */}
                <p>notifications</p>
            </div>
        </div>
    );
}

// Export the Notifications component to use it in the other files
export default Notifications;
