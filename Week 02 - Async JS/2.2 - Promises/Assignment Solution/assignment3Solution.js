/**
 * Q: Write Code that
 * 
 * 1. logs hi after 1 second
 * 2. logs hello 3 seconds after step 1
 * 3. logs hello there 5 seconds after step 2
 */

/* 
// callback hell example - nested callbacks 
setTimeout(function () {
  // print hi after 1 second
  console.log("hi");

  // print hello after 3 seconds
  setTimeout(function () {
    console.log("hello");

    // print hello there after 5 seconds
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
*/

// callback hell example - nested callbacks
// function to print hello there
function step3Done() {
    console.log("hello there");
  }
  
  // function to print hello after 3 seconds and call step3Done after 5 seconds
  function step2Done() {
    console.log("hello");
  
    // call step3Done after 5 seconds
    setTimeout(step3Done, 5000);
  }
  
  // function to print hi after 1 second and call step2Done after 3 seconds
  function step1Done() {
    console.log("hi");
  
    // call step2Done after 3 seconds
    setTimeout(step2Done, 3000);
  }
  
  // call step1Done after 1 second
  setTimeout(step1Done, 1000);
  
  /*
  // Promisified Version
  function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });
  */
  
  /*
  // Promisified Version
  function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  setTimeoutPromisified(1000)
    .then(function () {
      console.log("hi");
      return setTimeoutPromisified(3000);
    })
    .then(function () {
      console.log("hello");
      return setTimeoutPromisified(5000);
    })
    .then(function () {
      console.log("hello there");
    });
  */
  
  
  