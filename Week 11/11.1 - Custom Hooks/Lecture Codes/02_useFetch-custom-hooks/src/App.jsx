// Import the useState hook from the react module
import { useState } from "react";

// Import the usePostTitle and useFetch custom hooks from the useFetch hook folder
import { usePostTitle, useFetch } from "./hooks/useFetch";

// Create a function component named App that serves as the main application component
function App() {
    // Create a state variable called currentPost and a function to update it called setCurrentPost to manage the current post number
    const [currentPost, setCurrentPost] = useState(1);

    // Call the usePostTitle custom hook to get the post title
    const postTitle = usePostTitle();

    // Call the useFetch custom hook to get the post data
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

    // If the data is still loading, display a loading message to the user
    if (loading) {
        // Return a loading message to the user
        return <div>Loading...</div>;
    }

    // Return the JSX for the component
    return (
        <div>
            {/* Display the post title and body */}
            <h1>{postTitle}</h1>

            {/* Create buttons to change the current post number */}
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




// // Import the usePostTitle custom hook from the hooks folder
// import { usePostTitle } from "./hooks/useFetch";

// // Create a function component named App that serves as the main application component
// function App() {
//     // Call the usePostTitle custom hook to get the post title
//     const postTitle = usePostTitle();

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display the post title and body */}
//             <h1>{postTitle}</h1>
//         </div>
//     );
// }

// // Export the App component as the default export from this module
// export default App;

// // Import useState and useEffect hooks from react module
// import { useState, useEffect } from "react";

// // Create a function component named App that serves as the main application component
// function App() {
//     // Create a state variable called post and a function to update it called setPost to manage the state of the post variable
//     const [post, setPost] = useState({});

//     // Create an async function called getPosts that fetches the post data from the API and updates the post state variable with the response data
//     async function getPosts() {
//         // Fetch the post data from the API using the fetch function
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//         // Parse the response data to JSON format
//         const json = await response.json();

//         // Update the post state variable with the response data
//         setPost(json);
//     }

//     // Use the useEffect hook to call the getPosts function when the component mounts
//     useEffect(() => {
//         // Call the getPosts function when the component mounts
//         getPosts();
//     }, []); // Empty dependency array to ensure the effect runs only once

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Display the post title and body */}
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//         </div>
//     );
// }

// // Export the App component as the default export from this module
// export default App;
