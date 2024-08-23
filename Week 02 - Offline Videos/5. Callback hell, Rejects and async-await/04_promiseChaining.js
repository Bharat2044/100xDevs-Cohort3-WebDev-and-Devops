/*
Q: Write code that
    - logs Hi after 1 second
    - logs Hello 3 seconds after step 1
    - logs Hello There 5 seconds after step 2
*/

function setTimeoutPromisified(duration) {
    
    // return a promise object that resolves after the duration time
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

// promise chaining
setTimeoutPromisified(1000)
    .then(function () {
        console.log("Hi");

        return setTimeoutPromisified(3000);
    })
    .then(function () {
        console.log("Hello");

        return setTimeoutPromisified(5000);
    })
    .then(function () {
        console.log("Hello there");
    });
