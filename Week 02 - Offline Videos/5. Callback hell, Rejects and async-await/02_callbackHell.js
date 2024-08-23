/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/

// Has Callback Hell - Print Hi, Hello, Hello There in sequence with 1, 3, 5 seconds delay
setTimeout(function () {
    // print Hi after 1 second delay
    console.log("Hi");

    // This will called after 1 second delay 
    setTimeout(function () {
        // print Hello after 3 seconds delay
        console.log("Hello");

        // This will called after 3 seconds delay 
        setTimeout(function () {
            // print Hello There after 5 seconds delay
            console.log("Hello There");
        }, 5000);
    }, 3000);
}, 1000);



/*
// Doesnt really have callback hell
function step3Done() {
  console.log("Hello There");
}

function step2Done() {
  console.log("Hello");

  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("Hi");
  
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);
*/