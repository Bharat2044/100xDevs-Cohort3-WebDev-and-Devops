// Import useState hook from React module
import { useState } from "react";

// Import the usePrev custom hook from the hooks folder
import usePrev from "./hooks/usePrev";

// Create a function component named CustomUsePrevious that serves as a custom hook to get the previous value of a state variable
function CustomUsePrevious() {
  // Define a state variable named count and a function named setCount to update the state variable
  const [count, setCount] = useState(0);

  // Call the usePrev custom hook to get the previous value of the count state variable
  const prev = usePrev(count);

  // Return the JSX for the component
  return (
      <div>
            <h1>Custom usePrevious Hook</h1>

          {/* Display the current value of the count state variable */}
          <p>Current Value: {count}</p>

          {/* Display the previous value of the count state variable */}
          <p>Previous Value: {prev}</p>

          {/* Button to increment the count state variable */}
          <button onClick={() => setCount(count + 1)}>Increment</button>

          {/* Button to decrement the count state variable */}
          <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
  );
}

// Export the CustomUsePrevious component as the default export from this module to use in other components
export default CustomUsePrevious;