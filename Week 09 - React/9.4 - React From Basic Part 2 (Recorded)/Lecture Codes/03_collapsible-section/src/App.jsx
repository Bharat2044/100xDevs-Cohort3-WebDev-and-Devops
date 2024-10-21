// Import the useState hook from the react package 
import { useState } from 'react';

// Create a function component named App that will be rendered in the root element
const App = () => {
    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render two Collapsible components with title and children props */}
            <Collapsible title="Section 1">
                <p>This is the content of section 1.</p>
            </Collapsible>
            
            <Collapsible title="Section 2">
                <p>This is the content of section 2.</p>
            </Collapsible>
        </div>
    );
};

// Create a Collapsible component that will render children elements passed to it as props
const Collapsible = ({ title, children }) => {
    // Create a state variable called isOpen and a function setIsOpen to update the state variable 
    const [isOpen, setIsOpen] = useState(false);

    // Return JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Create a button element with an onClick event handler that calls setIsOpen with the opposite value of isOpen */}
            <button onClick={() => setIsOpen(!isOpen)}>
                {title} {isOpen ? '-' : '+'} {/* Render the title and a plus or minus sign based on the value of isOpen */}
            </button>
            
            {/* Render the children elements if isOpen is true */}
            {isOpen && <div>{children}</div>}
        </div>
    );
};

// Export the App component as the default export to be used in other files or components
export default App;
