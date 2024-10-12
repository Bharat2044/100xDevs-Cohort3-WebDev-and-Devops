// Import the BrowserRouter, Routes, Route, Link, and useNavigate from react-router-dom for handling routing
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

// Create a function component named App that will be rendered in the root element
function App() {
    // Return the JSX of the component
    return (
        // Create a div element that will contain the navigation links and the routes
        <div>
            {/* Wrap the routing inside BrowserRouter, which manages the routing history */}
            <BrowserRouter>
                {/* Create navigation links using Link component to switch between pages without refreshing */}
                <Link to="/">Allen</Link> | <Link to="/neet/online-coaching-class-11">Class 11</Link> |{" "}
                <Link to="/neet/online-coaching-class-12">Class 12</Link>
                
                {/* Define the routes for different pages */}
                <Routes>                    
                    <Route path="/" element={<Landing />} /> {/* Route for the landing page, mapped to the "/" path */}
                    <Route path="/neet/online-coaching-class-11" element={<Class11Program />} /> {/* Route for Class 11 NEET program page */}
                    <Route path="/neet/online-coaching-class-12" element={<Class12Program />} /> {/* Route for Class 12 NEET program page */}
                    <Route path="*" element={<ErrorPage />} /> {/* Route for handling unmatched paths, rendering a 404 error page */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// Function component to display a 404 error message if no route matches
function ErrorPage() {
    // Return the JSX for the component
    return (
        <div>
            {/* Display a message indicating the page was not found */}
            <h1>404 Page not found</h1>
        </div>
    );
}

// Function component to display the landing page
function Landing() {
    // Return the JSX for the component
    return (
        <div>
            {/* Display the main title of the landing page */}
            <h1>Welcome to Allen</h1>
        </div>
    );
}

// Function component to display information about the NEET program for Class 11
function Class11Program() {
    // Return the JSX for the component
    return (
        <div>
            {/* Display the heading for the Class 11 program */}
            <h2>Neet Programs for Class 11th</h2>
        </div>
    );
}

// Function component to display information about the NEET program for Class 12
function Class12Program() {
  // useNavigate hook allows programmatic navigation within the component
  const navigate = useNavigate();

    // Function to redirect the user to the landing page when the button is clicked
    function redirectUser() {
        navigate("/"); // Navigate to the landing page ("/" path)
    }

    // Return the JSX for the component
    return (
        <div>
            {/* Display the heading for the Class 12 program */}
            <h2>Neet Programs for Class 12th</h2>

            {/* Button that triggers the redirect function to navigate back to the landing page */}
            <button onClick={redirectUser}>Back to Landing Page</button>
        </div>
    );
}

// Export the App component to be used in other parts of the application
export default App;
