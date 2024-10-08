// Import useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define the UserData component
const UserData = () => {
    // State to store fetched data, loading status, and error messages
    const [users, setUsers] = useState([]); // Array to store users data
    const [loading, setLoading] = useState(true); // Boolean to track loading state
    const [error, setError] = useState(null); // State to store error messages if any

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch user data from an API endpoint
        const fetchUsers = async () => {
            try {
                // Fetch data from an API endpoint using the fetch function
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                // Check if the response is OK (status code 200)
                if (!response.ok) {
                    // Throw an error if the response is not OK
                    throw new Error("Failed to fetch data");
                }

                // Parse the response into JSON format
                const data = await response.json();

                // Update the users state with the fetched data
                setUsers(data);
            } catch (error) {
                // Catch any error that occurs during fetching
                // Set the error state with the error message
                setError(error.message);
            } finally {
                // Finally block to execute after fetching or error
                // Set loading to false once data is fetched or an error occurs
                setLoading(false);
            }
        };

        // Call the fetchUsers function to fetch data when the component mounts
        fetchUsers();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    // Render loading message, error message, or the list of users
    return (
        <div>
            {/* Display the title of the page */}
            <h1>User Data</h1>

            {/* Display loading message if data is still being fetched */}
            {loading && <p>Loading...</p>}

            {/* Display error message if any error occurs during fetching */}
            {error && <p>Error: {error}</p>}

            {/* If data is loaded and no errors occurred, display the list of users */}
            {!loading && !error && (
                <ul>
                    {/* Map over the users array and display user details */}
                    {users.map((user) => (
                        // Display user details in a list item
                        <li key={user.id}>
                            {/* Key for each user, as React requires a unique key for lists */}
                            <p>Name: {user.name}</p> {/* Display user's name */}
                            <p>Email: {user.email}</p> {/* Display user's email */}
                            <p>City: {user.address.city}</p> {/* Display user's city */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Export the UserData component as the default export to be used in other components
export default UserData;
