// Import useState and useEffect hooks from react
import { useState, useEffect } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named users and a function to update it named setUsers
    const [users, setUsers] = useState([]);

    // Create a state variable named loading and a function to update it named setLoading
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to fetch data from the API
    useEffect(() => {
        // Create an async function named fetchData that will fetch data from the API
        const fetchData = async () => {
            // Use a try-catch block to handle errors while fetching data
            try {
                // Fetch data from the API using the fetch function and store the response in the response variable
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                // Convert the response to JSON format and store it in the data variable
                const data = await response.json();

                // Update the users state with the data fetched from the API
                setUsers(data);
            } catch (error) { // Catch any errors that occur while fetching data
                // Log the error to the console if there is an error while fetching data
                console.error("Error fetching data:", error);
            } finally { // this block will run whether the try block is successful or not
                // Update the loading state to false after fetching the data
                setLoading(false);
            }
        };

        // Call the fetchData function when the component mounts to fetch the data
        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts.

    // Display a loading message if the data is still being fetched
    if (loading) {
        // return JSX that will be rendered while the data is being fetched
        return <h2>Loading...</h2>;
    }

    // return JSX that will be rendered once the data is fetched successfully
    return (
        <div>
            <ul>
                {/* Map over the users array and display the user details in a list format */}
                {users.map((user) => (
                    // Display the user details in a list format with name, email, and city
                    <li key={user.id} style={{ margin: 10 }}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>City: {user.address.city}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Export the App component to use it in the other files
export default App;
