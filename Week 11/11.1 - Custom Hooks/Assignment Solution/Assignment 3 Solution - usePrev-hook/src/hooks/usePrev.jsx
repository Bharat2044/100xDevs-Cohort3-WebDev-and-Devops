// Import the useRef and useEffect hooks from React module
import  { useRef, useEffect } from 'react';

// Create a custom hook named usePrev that takes a value as an argument
function usePrev(value) {
    // Create a reference to store the previous value of the value argument
    const ref = useRef();  

    // Use the useEffect hook to update the reference value when the value argument changes
    useEffect(() => {
        // Update the reference value with the new value argument
        ref.current = value;         
    }, [value]); // Only update the reference value when the value argument changes 

    // Return the reference value as the previous value
    return ref.current;
}


// Export the usePrev custom hook as the default export from this module
export default usePrev;
