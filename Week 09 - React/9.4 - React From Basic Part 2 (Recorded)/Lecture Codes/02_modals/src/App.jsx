// Import useState from react
import { useState } from "react";

// Create a function component named App that will be rendered in the root element
const App = () => {
    // Create a state variable called isModalOpen and a function setModalOpen to update the state variable
    const [isModalOpen, setModalOpen] = useState(false);

    // Return the JSX that will be rendered in the browser
    return (
        <div>
            {/* Create a button element with an onClick event handler that calls setModalOpen with true */}
            <button onClick={() => setModalOpen(true)}>Open Modal</button>

            {/* Render a Modal component with isOpen, onClose, and children props */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Modal Title</h2> {/* Render a heading element with text content */}
                <p>This is some content inside the modal.</p> {/* Render a paragraph element with text content */}
            </Modal>
        </div>
    );
};

// Create a Modal component that will render children elements passed to it as props
const Modal = ({ isOpen, onClose, children }) => {
    // If the modal is not open, return null
    if (!isOpen) {
        return null;
    }

    // Return JSX that will be rendered in the browser
    return (
        // Create a div element with inline CSS
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "5px",
                }}
            >
                {/* Render a button element with an onClick event handler that calls onClose */}
                <button onClick={onClose}>Close</button>

                {/* Render any children elements passed to the Modal component */}
                {children}
            </div>
        </div>
    );
};

// Export the App component as the default export to be used in other files or components
export default App;
