// Import useState and Component from react module
import { useState, Component } from "react";

// Create a functional component App that will be rendered in the root element
function App() {
    // Render the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render the ClassCounter component  */}
            <ClassCounter />

            {/* Render the ClassCounter component  */}
            <FunctionalCounter />
        </div>
    );
}

// Create a class-based component ClassCounter that will render a div element with a count property
class ClassCounter extends Component {
    // Create a state object with a count property set to 0
    state = { count: 0 };

    // Create a method named increment that will increment the count property by 1
    increment = () => {
        // Set the state of the count property to the current count plus 1 using setState method
        this.setState({ count: this.state.count + 1 });
    };

    // Render the JSX that will be rendered in the browser
    render() {
        return (
            // Create a div element with JSX
            <div>
                {/* Render the count property from the state object */}
                <p>Count: {this.state.count}</p>

                {/* Create a button element with an onClick event that will call the increment method */}
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Create a functional component FunctionalCounter that will render a div element with a count property
const FunctionalCounter = () => {
    // Create a state object with a count property set to 0 using the useState hook
    const [count, setCount] = useState(0);

    // Create a function named increment that will increment the count property by 1
    function increment() {
        // Set the state of the count property to the current count plus 1 using the setCount function
        setCount((count) => count + 1);
    }

    // Render the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render the count property from the state object */}
            <p>Count: {count}</p>

            {/* Create a button element with an onClick event that will call the increment function */}
            <button onClick={increment}>Increment</button>
        </div>
    );
};

// Export the App component as the default export to be used in other files or components
export default App;
