// Import the useState hook from react
import { useState } from 'react';

// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            {/* Call ToggleMessage component here to render it in the App component */}
            <ToggleMessage />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div>
                    <div>
                        {/* Call PostComponent here with props to render it in the App component */}
                        <PostComponent
                            name={"Bharat"}
                            subtitle={"20 followers"}
                            time={"2m ago"}
                            image={
                                "https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"
                            }
                            description={
                                "What to know how to win big? Check out how these folks won $6000 in bounties."
                            }
                        />
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Harkirat"}
                                subtitle={"Promoted"}
                                image={
                                    "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
                                }
                                description={
                                    "How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create a function component named ToggleMessage to render it in the App component
const ToggleMessage = () => {
    // Create a state variable isVisible and a function setIsVisible to toggle the visibility of the message
    const [isVisible, setIsVisible] = useState(false);

    // return JSX that will be rendered
    return (
        <div>
            {/* Create a button to toggle the visibility of the message */}
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Message
            </button>

            {/* Conditionally render the message if isVisible is true */}
            {isVisible && <p>This message is conditionally rendered!</p>}
        </div>
    );
};

// Create a style object to apply styles to the div element in PostComponent
const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

// Create a function component named PostComponent with props to render it in the App component
function PostComponent({ name, subtitle, time, image, description }) {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            <div style={{ display: "flex" }}>
                {/* Display the image, name, subtitle, and time */}
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{subtitle}</div>

                    {/* conditionally render time if it is available */}
                    {/* 
                    {time && (
                        <div style={{ display: "flex" }}>
                            <div>{time}</div>
                            <img
                                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                                style={{ width: 15, height: 15 }}
                            />
                        </div>
                    )} 
                    */}
                    {time !== undefined ? (
                        <div style={{ display: "flex" }}>
                            <div>{time}</div>
                            <img
                                src="https://imgs.search.brave.com/HR4XL7q_XpiQSqNwAl17jYkdNBrGw-fKdXxJlCr-uls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM3/MDc3ODM3Ni9waG90/by9jbG9jay02LW9j/bG9jay5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTZKUXI5/UFdPYmVuY2lOMHVj/QkgycXJFeWd5WlY4/VUdDem1UQ1pVRnVE/cz0"
                                style={{ width: 15, height: 15 }}
                            />
                        </div>
                    ) : null}
                </div>
            </div>

            <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;
