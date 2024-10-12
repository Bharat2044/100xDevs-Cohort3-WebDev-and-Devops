// Import
import { Fragment } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX that will be rendered in the browser
    return (
        // Wrap the JSX in a Fragment to avoid adding an extra div element to the DOM
        <>
            <h1>Hello Baccho!</h1>

            {/* Render the MyComponent component */}
            <MyComponent />
        </>
    );
}

// Create a function component named MyComponent that will be rendered in the App component
const MyComponent = () => {
    // Return the JSX that will be rendered in the browser
    return (
        // Wrap the JSX in a Fragment to avoid adding an extra div element to the DOM
        <Fragment>
            <h2>Hello</h2>
            <p>World</p>
        </Fragment>
    );
};

// Exporting the main App component for use in the application.
export default App;
