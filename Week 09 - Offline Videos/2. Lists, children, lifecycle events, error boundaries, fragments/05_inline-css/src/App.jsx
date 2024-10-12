// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render the MyComponent component */}
            <MyComponent />
        </div>
    );
}

// Create a MyComponent component that will render a div element with inline CSS
function MyComponent() {
    
  // Return JSX that will be rendered
    return (
        // Create a div element with inline CSS
        <div style={{ backgroundColor: "blue", color: "white", padding: 10, borderRadius: 20 }}>
            Hello, World!
        </div>
    );
}

// Export the App component as the default export to be used in other files or components
export default App;
