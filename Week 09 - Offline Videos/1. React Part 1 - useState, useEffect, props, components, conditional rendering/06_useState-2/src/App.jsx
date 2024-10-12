// Import the useState hook from react
import { useState } from "react";

// Import the PostComponent component from the PostComponent file
import { PostComponent } from "./PostComponent";

// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named posts and a function to update it named setPosts 
    const [posts, setPosts] = useState([]);

    // Create a function named addPost that will add a new post to the posts state
    function addPost() {
        setPosts([...posts, {
            name: "harkirat",
            subtitle: "10000 followers",
            time: "2m ago",
            image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
            description: "What to know how to win big? Check out how these folks won $6000 in bounties.",
      }]);
    }

    // Create an array of postComponents by mapping over the posts array and returning a PostComponent for each post
    const postComponents = posts.map((post) => (
        <PostComponent
            name={post.name}
            subtitle={post.subtitle}
            time={post.time}
            image={post.image}
            description={post.description}
        />
    ));

    // return JSX that will be rendered
    return (
        <div style={{ background: "#dfe6e9", minHeight: "100vh" }}>
            {/* Add a button that will call the addPost function when clicked  */}
            <button onClick={addPost} style={{
                padding: 10,
                margin: 10,
                borderRadius: 5,
                cursor: "pointer",
            }}>Add post</button>

            {/* Display the postComponents */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>{postComponents}</div>
            </div>
        </div>
    );
}

// Export the App component to use it in the other files
export default App;
