// Import useState and useEffect hooks from react module
import { useState, useEffect } from "react";

// Create a custom hook named useFetch that fetches data from the specified URL and re-fetches it at the specified interval
function useFetch(url, interval) {
    // Declare a state variable named finalData and a function to update it named setFinalData using the useState hook
    const [finalData, setFinalData] = useState({});

    // Declare a state variable named loading and a function to update it named setLoading using the useState hook
    const [loading, setLoading] = useState(true);

    // Create an async function named getDetails that fetches data from the specified URL and updates the finalData state variable
    async function getDetails() {
        // try-catch block to handle errors
        try {
            // Fetch data from the specified URL and store the response in the response variable
            let response = await fetch(url);

            // Parse the response data as JSON and store it in the json variable
            let json = await response.json();

            // Set the finalData state variable to the response data
            setFinalData(json);
        } catch (error) {
            // Log any errors to the console
            console.log(error);
        } finally {
            // Set the loading state variable to false once the data has been fetched
            setLoading(false);
        }
    }

    // Use the useEffect hook to fetch data from the specified URL and re-fetch it at the specified interval
    useEffect(() => {
        // Call the getDetails function to fetch data from the specified URL
        getDetails();

        // If an interval is specified, re-fetch the data at the specified interval using setInterval
        if (interval) {
            // Set an interval to re-fetch the data at the specified interval and store it in the fetchInterval variable
            const fetchInterval = setInterval(() => {

                // Call the getDetails function to re-fetch the data at the specified interval
                getDetails();
            }, interval); // Interval specified in milliseconds

            // Return a cleanup function to clear the interval when the component is unmounted
            return () => clearInterval(fetchInterval); // Clear interval on cleanup
        }
    }, [url, interval]); // Dependencies for the useEffect hook to re-run the effect

    // Return the finalData and loading state variables from the custom hook 
    return { finalData, loading };
}

// Export the useFetch custom hook as the default export from this module to make it available for use in other modules
export default useFetch;
