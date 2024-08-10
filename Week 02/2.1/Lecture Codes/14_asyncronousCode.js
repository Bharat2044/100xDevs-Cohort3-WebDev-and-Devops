function timeout() {
  console.log("Click the button!");
}

console.log("Hi!");

// IO task 
setTimeout(timeout, 1000);

console.log("Welcome to Loupe!");

let c = 0;

// CPU intensive task
for (let i = 0; i < 10000000000; i++) {
    c = c + 1;
}

console.log("Expensive operation done!");
