// function to promisify setTimeout function using promise object
function setTimeoutPromisified(duration) {
    
    // return a promise object that resolves after the duration time
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

// callback function to be called after the promise is resolved
function callback() {
    console.log("3 second has passed");
}

// call the setTimeoutPromisified function with a duration of 3000ms and then call the callback function
setTimeoutPromisified(3000).then(callback);
