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

// async-await
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi");

    await setTimeoutPromisified(3000);
    console.log("Hello");

    await setTimeoutPromisified(5000);
    console.log("Hello there");
}

solve();

console.log("After solve function");
