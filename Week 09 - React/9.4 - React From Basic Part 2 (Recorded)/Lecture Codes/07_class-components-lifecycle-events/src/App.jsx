// Import the React from the react module
import React from "react";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render MyComponent Component inside App */}
            <MyComponent />
        </div>
    );
}

// Create a class component named MyComponent that extends React.Component class
class MyComponent extends React.Component {
    // Constructor method initializes state and logs to console
    constructor(props) {
        console.log("Constructor"); // Logs when the component is instantiated
        super(props); // Calls the constructor of the parent class
        this.state = { count: 0 }; // Initialize state with a count of 0
    }

    // componentDidMount is called after the component is inserted into the DOM
    componentDidMount() {
        console.log("Component Mounted"); // Logs when the component has mounted
    }

    // componentDidUpdate is called after the component's state or props are updated
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated"); // Logs whenever the component updates
    }

    // componentWillUnmount is called just before the component is removed from the DOM
    componentWillUnmount() {
        console.log("Component will Unmount"); // Logs when the component is about to unmount
    }

    // The render method is responsible for rendering the component's UI
    render() {
        // Logs during the render process
        console.log("Render");

        // Return JSX that will be rendered in the browser
        return (
            // Create a div element with JSX
            <div>
                {/* Display the current count from state */}
                <p>Count: {this.state.count}</p>

                {/* Button to increment the count by updating state */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
            </div>
        );
    }
}

// Export the App component as the default export to be used in other files or components
export default App;
