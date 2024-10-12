// Import React to use its features like components, state, and lifecycle methods.
import React from "react";

// Create a class component named ErrorBoundary that extends React.Component.
class ErrorBoundary extends React.Component {
    
    // Constructor initializes component's state to track if there's an error.
    constructor(props) {
        super(props); // Call the parent class constructor
        this.state = { hasError: false }; // Initialize state with hasError set to false
    }

    // Lifecycle method triggered on error, updates state to render fallback UI.
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // Lifecycle method for side effects when an error occurs, logs error details.
    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    // Render method to display fallback UI if there's an error, else render children.
    render() {
        // If there's an error, display a fallback UI with a red background.
        if (this.state.hasError) {
            // Return JSX with a red background and error message.
            return (
                // Create a div element with JSX
                <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
                    <h2>Something went wrong.</h2>
                </div>
            );
        }

        // Otherwise, render the child components.
        return this.props.children;
    }
}

// Exporting ErrorBoundary component to be used in other parts of the app.
export default ErrorBoundary;
