// Import the ErrorBoundary component for error handling in the App component.
import ErrorBoundary from "./ErrorBoundary";

// Create a function component named App that will be rendered in the root element
const App = () => {
    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
            <ErrorBoundary>
                <Card1 /> {/* Renders Card1 component. */}
            </ErrorBoundary>

            {/* Similarly, wrap Card2 to ensure any errors are caught. */}
            <ErrorBoundary>
                <Card2 /> {/* Renders Card2 component. */}
            </ErrorBoundary>

            {/* Card3 is not wrapped in ErrorBoundary, so errors will not be caught by the boundary. */}
            <Card3 /> {/* Renders Card3 component. */}
        </div>
    );
};

// Create a function component named Card1 that will be rendered in the App component
function Card1() {
    // Throw an error to simulate a rendering error in the component.
    throw new Error("Error While Rendering Card 1");

    // Return the JSX that will be rendered in the browser
    return (
        // Renders the content of Card1 (though this code is unreachable due to the thrown error).
        <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
            <h2>Card 1</h2>
        </div>
    );
}

// Create a function component named Card2 that will be rendered in the App component
function Card2() {
    // Return the JSX that will be rendered in the browser
    return (
        // Renders the content of Card2 with styling and padding, no errors thrown here.
        <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
            <h2>Card 2</h2>
        </div>
    );
}

// Create a function component named Card3 that will be rendered in the App component
function Card3() {
    // Return the JSX that will be rendered in the browser
    return (
        // Renders the content of Card3 with styling similar to Card2.
        <div style={{ background: "red", borderRadius: 10, padding: 20, marginTop: 20 }}>
            <h2>Card 3</h2> 
        </div>
    );
}

// Exporting the main App component for use in the application.
export default App;
