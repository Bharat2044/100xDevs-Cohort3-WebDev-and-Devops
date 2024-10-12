// Import the useEffect and useState hooks from React
import { useEffect, useState } from "react";

// Import the App.css file to apply styles
import "./App.css";

// Create a function component named App that will be rendered in the root element 
function App() {
    // Create a state variable named currentTab and a function to update it named setCurrentTab that will be used to store the current tab number
    const [currentTab, setCurrentTab] = useState(1);

    // Create a state variable named tabData and a function to update it named setTabData that will be used to store the data for the current tab
    const [tabData, setTabData] = useState({});

    // Create a state variable named loading and a function to update it named setLoading that will be used to show a loading message
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to send a backend request to fetch the data for the current tab when the currentTab state changes
    useEffect(
        function () {
            // Send a backend request to fetch the data for the current tab 
            // Log the current tab to the console 
            console.log("Sent request to backend to get data for tab", currentTab);

            // Set the loading state to true to show a loading message 
            setLoading(true);

            // Fetch the data for the current tab from the backend 
            fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(async (res) => {
                const json = await res.json(); // Convert the response to JSON format 
                setTabData(json); // Update the tabData state with the fetched data 
                setLoading(false); // Set the loading state to false to hide the loading message
            });
        }, [currentTab]); // Add the currentTab state as a dependency to the useEffect hook 

    // Return JSX that will be rendered 
    return (
        <div style={{ margin: 20, textAlign: "center" }}>
            {/* Add 4 buttons to switch between the tabs */} 
            <button
                onClick={function () {
                    setCurrentTab(1);
                }}
                style={{ color: currentTab === 1 ? "red" : "black" }}
            >
                Todo #1
            </button>            
            <button
                onClick={function () {
                    setCurrentTab(2);
                }}
                style={{ color: currentTab === 2 ? "red" : "black" }}
            >
                Todo #2
            </button>
            <button
                onClick={function () {
                    setCurrentTab(3);
                }}
                style={{ color: currentTab === 3 ? "red" : "black" }}
            >
                Todo #3
            </button>
            <button
                onClick={function () {
                    setCurrentTab(4);
                }}
                style={{ color: currentTab === 4 ? "red" : "black" }}
            >
                Todo #4
            </button>

            {/* Display the title of the current tab */} 
            <div>{loading ? "Loading..." : tabData.title}</div>
        </div>
    );
}

export default App;
