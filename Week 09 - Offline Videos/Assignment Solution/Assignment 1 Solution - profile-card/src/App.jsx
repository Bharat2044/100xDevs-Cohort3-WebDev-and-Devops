import PostComponent from "./PostComponent";
import ProfileComponent from "./ProfileComponent";

// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", minHeight: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div>
                    {/* Call PostComponent here to render it in the App component */}
                    <PostComponent />

                    {/* Call ProfileComponent here to render it in the App component */}
                    <ProfileComponent />
                </div>
            </div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;
