// Import the useRef and useEffect hooks from React module
import  { useRef, useEffect } from 'react';

// Create a custom hook named usePrev that takes a value as an argument
function usePrev(value) {
    // Create a reference to store the previous value of the value argument
    const ref = useRef();

    // Log the value argument when the component re-renders
    console.log("Re-render with new value", value);    

    // Use the useEffect hook to update the reference value when the value argument changes
    useEffect(() => {
        // Update the reference value with the new value argument
        ref.current = value; 

        // Log the updated reference value
        console.log("Updated the ref.current", ref.current);
        
    }, [value]); // Only update the reference value when the value argument changes 

    // Log the current value of the reference
    console.log("Current ref.current", ref.current); 

    // Return the reference value as the previous value
    return ref.current;
}


// Export the usePrev custom hook as the default export from this module
export default usePrev;
