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

// Create a function component named PostComponent that will be rendered in the App component
function PostComponent() {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            <div style={{ display: "flex" }}>
                {/* display the image with the given source and style */}
                <img
                    src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                    style={{ width: 40, height: 40, borderRadius: 40 }}
                />
                
                {/* display the div element with the given style */}
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>100xdevs</b>
                    <div>23,888 followers</div>
                    <div>12m</div>
                </div>
            </div>

            {/* display the div element with the given style */}
            <div style={{ fontSize: 14 }}>
                What to know how to win big? Check out how these folks won $6000 in bounties.
            </div>
        </div>
    );
}

// Export PostComponent to use it in other components 
export default PostComponent;
