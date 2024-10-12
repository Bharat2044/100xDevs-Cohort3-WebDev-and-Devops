// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div>
                    <div>
                        {/* Call PostComponent here to render it in the App component */}
                        <PostComponent />
                    </div>
                    <div>
                        {/* Call PostComponent here to render it in the App component */}
                        <PostComponent />
                    </div>
                    <div>
                        {/* Call PostComponent here to render it in the App component */}
                        <PostComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Create a style object to apply styles to the div element in PostComponent
const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10
};

// Create a function component named PostComponent that will be rendered in the App component
function PostComponent() {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img
                    src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                    style={{ width: 40, height: 40, borderRadius: 40 }}
                />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>100xdevs</b>
                    <div>23,888 followers</div>
                    <div>12m</div>
                </div>
            </div>
            
            <div style={{ fontSize: 14 }}>
                What to know how to win big? Check out how these folks won $6000 in bounties.
            </div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;
