// Importing the useState hook from React, which is used to add state to the functional component.
import { useState } from 'react';

// Importing the CSS file to style the App component.
import './App.css';

// Defining a functional component named 'App'.
function App() {

  // Declaring a state variable 'count' initialized to 0 and its setter function 'setCount' using the useState hook.
  const [count, setCount] = useState(0);

  // Defining a function that handles the button click event.
  function onClickHandler() {

    // Updating the state 'count' by incrementing its value by 1.
    setCount(count + 1);
  }

  return (
    // Defining the main container div element that holds the content of the App component.
    <div>

      {/* Displaying a heading with the text 'Counter App'. */}
      <h1>Counter App</h1>

      {/* A button element with an onClick event listener that triggers the onClickHandler function when clicked. */}
      <button onClick={onClickHandler}>

        {/* Displaying the current value of the 'count' state inside the button. */}
        Counter {count}
      </button>
    </div>
  );
}

// Exporting the App component as the default export for use in other parts of the application.
export default App; 
