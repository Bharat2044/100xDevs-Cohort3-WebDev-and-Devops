// GET request using Fetch API
// Function to fetch data using Fetch API - Promise version
function getData1() {
    // Fetch API uses Promises to handle requests
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json()) // Parse response as JSON
        .then(json => console.log(json)) // Log the data
        .catch(error => console.error(error)); // Error handling
}

// Function to fetch data using Fetch API - Async/Await version
async function getData2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // Await the response
        const json = await response.json(); // Parse response as JSON
        console.log(json); // Log the data
    } catch (error) {
        console.error(error); // Error handling
    }
}

// Call the functions
getData1();
getData2();


// POST request using Fetch API
// Function to post data using Fetch API - Promise version
function postData1() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // Specify the method as POST
        body: JSON.stringify({
            title: "Hi", 
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8", // Set content type
            "Authorization": "Bearer my token", // Set Authorization header
        },
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(json => console.log(json)) // Log the response data
        .catch(error => console.error(error)); // Error handling
}

// Function to post data using Fetch API - Async/Await version
async function postData2() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Specify the method as POST
            body: JSON.stringify({
                title: "Hello", // Payload data
                body: "bar",
                userId: 2,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8", // Set content type
                "Authorization": "Bearer my token", // Set Authorization header
            },
        });

        const json = await response.json(); // Parse the response as JSON
        console.log(json); // Log the response data
    } catch (error) {
        console.error(error); // Error handling
    }
}

// Call the functions
postData1();
postData2();
