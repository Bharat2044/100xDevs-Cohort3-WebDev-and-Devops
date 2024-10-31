// Importing React hooks useState and useEffect
import { useState, useEffect } from "react";

// Custom hook to determine the online status of the user
const useIsOnline = () => {
    // Initializing a state variable 'isOnline' to true, assuming user starts online
    const [isOnline, setIsOnline] = useState(true);

    // useEffect to manage event listeners for online and offline events
    useEffect(() => {
        // Function to set isOnline to true when the user is online
        const handleOnline = () => {
            setIsOnline(true);
        };

        // Function to set isOnline to false when the user is offline
        const handleOffline = () => {
            setIsOnline(false);
        };

        // Adding event listeners to detect when the user goes online or offline
        window.addEventListener("online", handleOnline); 
        window.addEventListener("offline", handleOffline);

        // Cleanup function to remove event listeners when the component using this hook unmounts
        return () => {
            window.removeEventListener("online", handleOnline); // Removing the online event listener
            window.removeEventListener("offline", handleOffline); // Removing the offline event listener
        };
    }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

    // Returning the online status (true if online, false if offline)
    return isOnline;
};

// Exporting the custom hook for use in other components 
export default useIsOnline; 
