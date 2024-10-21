// Create a function component named App that will be rendered in the root element
function App() {
    // Return JSX that will be rendered in the browser
    return (
        // Create a container div element with inline CSS for flexbox layout
        <div style={{ display: "flex" }}>
            {/* Render a Card component containing an input field */}
            <Card>
                <div style={{ color: "green" }}>
                    What do you want to post
                    <br />
                    <br />
                    <input type="text" />
                </div>
            </Card>

            {/* Render a Card component with a title and paragraph content */}
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>

            {/* Render another Card component with different content */}
            <Card>
                <h2>Another Card</h2>
                <textarea type="text"></textarea>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
}

// Create a Card component that will render children elements passed to it as props
function Card({ children }) {
    return (
        // Apply inline styles for background, border, padding, margin, and shadow
        <div
            style={{
                background: "white",
                borderRadius: 10,
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            {/* Render any children elements passed to the Card component */}
            {children}
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App;




// // Alternative code with different Card usage pattern:

// function App() {
//     return (
//         <div style={{ display: "flex" }}>
//             {/* Render Card with inline content passed as innerContent prop */}
//             <Card
//                 innerContent={
//                     <div style={{ color: "green" }}>
//                         What do you want to post
//                         <br />
//                         <br />
//                         <input type="text" />
//                     </div>
//                 }
//             />

//             {/* Render Card with a string passed as innerContent */}
//             <Card innerContent="Hi there" />
//         </div>
//     );
// }

// // Define the Card component that receives innerContent prop and renders it inside the styled div
// function Card({ innerContent }) {
//     return (
//         <div
//             style={{
//                 background: "black",
//                 color: "white",
//                 borderRadius: 10,
//                 padding: "10px",
//                 margin: "10px",
//                 boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
//             }}
//         >
//             {innerContent}
//         </div>
//     );
// }

// // Export the App component for use in other files
// export default App;
//
