// Try to create promosofied version of setTimeout

// function to create a promisified version of setTimeout 
function promisifiedSetTimeout(time) {

    // return a promise that resolves after the given time 
    return new Promise((resolve, reject) => {
        // set a timeout for the given time 
        setTimeout(() => {
            // resolve the promise after the given time
            resolve();
        }, time);
    });
}

// call the promisifiedSetTimeout function with a time of 2 seconds
promisifiedSetTimeout(2000).then(() => {
    console.log("Called after 2 seconds");
});