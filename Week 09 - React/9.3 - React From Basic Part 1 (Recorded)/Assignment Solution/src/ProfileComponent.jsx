// Create a style object to apply styles to the div element in ProfileComponent
const style = {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
};

// Create a function component named ProfileComponent that will be rendered in the App component
function ProfileComponent() {
    return (
        // Apply style object to the div element
        <div style={style}>
            {/* Apply inline styles to the div element */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* display the image with the given source and style */}
                <img
                    src={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                    style={{ width: 60, height: 60, borderRadius: 60, marginBottom: 10 }}
                />

                {/* display the div element with the given style */}
                <b>Harkirat Singh</b>
                <span>Working with WebRTC</span>
            </div>

            {/* Apply inline styles to the div element */}
            <div style={{ fontSize: 14, marginTop: 25 }}>
                <p style={{display: "flex", justifyContent: "space-between"}}>
                    <span>Profile Viewers </span>
                    <span style={{color: "blue"}}>41,903</span>
                </p>
                <p style={{display: "flex", justifyContent: "space-between"}}>
                    <span>Post Impressions</span>
                    <span style={{color: "blue"}}>1,313</span>
                </p>
            </div>
        </div>
    );
}

// Export ProfileComponent to use it in other components 
export default ProfileComponent;
