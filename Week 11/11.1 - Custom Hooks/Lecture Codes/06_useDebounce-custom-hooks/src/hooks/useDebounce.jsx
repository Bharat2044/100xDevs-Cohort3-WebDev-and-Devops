// Import the useEffect and useState hooks from the react module
import { useState, useEffect } from 'react';

// Create a custom hook named useDebounce that takes two arguments: value and delay
const useDebounce = (value, delay) => {
    // Create a state variable named debouncedValue and set it to the value argument passed to the hook
    const [debouncedValue, setDebouncedValue] = useState(value);

    // Create a side effect that sets a timeout to update the debouncedValue state variable after the delay time has passed
    useEffect(() => {
        // Create a variable named handler and set it to the return value of the setTimeout function
        const handler = setTimeout(() => {
            // Call the setDebouncedValue function with the value argument passed to the hook
            setDebouncedValue(value);
        }, delay); // Pass the delay argument as the second argument to the setTimeout function

        // Return a cleanup function that clears the timeout when the component unmounts
        return () => {
            clearTimeout(handler); // Call the clearTimeout function with the handler variable as an argument
        };
    }, [value, delay]); // Pass the value and delay arguments as dependencies to the useEffect hook

    // Return the debouncedValue state variable from the hook
    return debouncedValue;
};

// Export the useDebounce custom hook as the default export from this module 
export default useDebounce;





// // Import the useEffect and useRef hooks from the react module
// import { useEffect, useRef } from "react"

// // Create a custom hook named useDebounce that takes an originalFn function as an argument
// function useDebounce(originalFn) {
//     // Create a ref variable named currentClock and set it to the return value of the useRef hook
//     const currentClock = useRef();

//     // Create a function named fn that clears the current timeout and sets a new timeout to call the originalFn function after 1 second
//     const fn = () => {
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalFn, 1000);
//     }

//     // Create a side effect that clears the current timeout when the component unmounts
//     useEffect(() => {
//         fn();
//     }, []);

//     // Return the fn function from the hook
//     return fn;
// }

// // Export the useDebounce custom hook as the default export from this module
// export default useDebounce;