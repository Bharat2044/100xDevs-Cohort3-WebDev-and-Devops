// Create a function component named App that will be rendered in the root element
function App() {
    // return JSX that will be rendered
    return (
        // Apply inline styles to the div element
        <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
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
                            followerCount={20}
                            time={"2m ago"}
                            image={"https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"}
                            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
                        />
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Harkirat"}
                                followerCount={30}
                                time={"3m ago"}
                                image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                                description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* Call PostComponent here with props to render it in the App component */}
                            <PostComponent
                                name={"Deepak"}
                                followerCount={50}
                                time={"18m ago"}
                                image={"https://imgs.search.brave.com/ZACv93qZO57A2RrexnAjJi9CTpejuyu2aIGeB9-2beA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTk0/OTM2My5qcGc"}
                                description={"Here is the roadmap to become a full-stack developer in 2024."}
                            />
                        </div>
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
    margin: 10,
};

// Create a function component named PostComponent with props to render it in the App component
function PostComponent({ name, followerCount, time, image, description }) {
    // return JSX that will be rendered
    return (
        // Apply style object to the div element
        <div style={style}>
            {/* display the name, followerCount, time, image, and description using props */}
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{followerCount} followers</div>
                    <div>{time}</div>
                </div>
            </div>

            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
}

// Export App Component to use it in other components
export default App;
