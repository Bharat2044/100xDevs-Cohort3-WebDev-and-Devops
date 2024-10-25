// Import useState and useEffect hooks from react module
import { useState, useEffect } from "react";

// Create a custom hook called usePostTitle and export it from this module to be used in other components
export function usePostTitle() {
    // Create a state variable called post and a function to update it called setPost to manage the state of the post variable
    const [post, setPost] = useState({});

    // Create an async function called getPosts that fetches the post data from the API and updates the post state variable with the response data
    async function getPosts() {
        // Fetch the post data from the API using the fetch function and store the response in a variable named response
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // Parse the response data to JSON format and store in a variable named json
        const json = await response.json();

        // Update the post state variable with the response data
        setPost(json);
    }

    // Use the useEffect hook to call the getPosts function when the component mounts
    useEffect(() => {
        // Call the getPosts function when the component mounts
        getPosts();
    }, []); // Empty dependency array to ensure the effect runs only once

    // Return the post title from the post state variable
    return post.title;
}


// Create a custom hook called useFetch that fetches data from a given URL and returns the data as an object
export function useFetch(url) {
    // Create a state variable called finalData and a function to update it called setFinalData to manage the state of the finalData variable
    const [finalData, setFinalData] = useState({});

    // Create a state variable called loading and a function to update it called setLoading to manage the loading state
    const [loading, setLoading] = useState(true);

    // Create an async function called getDetails that fetches the data from the given URL and updates the finalData state variable with the response data
    async function getDetails() {
        // Set the loading state to true when the data is being fetched
        setLoading(true);

        // Fetch the data from the given URL using the fetch function and store the response in a variable named response
        const response = await fetch(url);

        // Parse the response data to JSON format and store in a variable named json
        const json = await response.json();

        // Update the finalData state variable with the response data
        setFinalData(json);

        // Set the loading state to false when the data has been fetched
        setLoading(false);
    }

    // Use the useEffect hook to call the getDetails function when the component mounts
    useEffect(() => {

        // Call the getDetails function when the component mounts and the URL changes
        getDetails();
    }, [url]); // Dependency array with the URL to ensure the effect runs when the URL changes

    // Return the finalData and loading state variables as an object to be used in other components 
    return { finalData, loading };
}
