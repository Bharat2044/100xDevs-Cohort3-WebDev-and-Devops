/**
 * To see the output of this code, open the following HTML file in your browser.
 * The output will be logged in the console.
 */

// GET request using axios
// Function to fetch data using axios library - Promise version
function getData1() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
}

// Function to fetch data using axios library - Async/Await version
async function getData2() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the functions
getData1();
getData2();


// POST request using axios
// Function to post data using axios library - Promise version
function postData1() {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hi",
        body: "bar",
        userId: 1
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer my token"
        }
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

// Function to post data using axios library - Async/Await version
async function postData2() {
    try {
        /*
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "Hello",
            body: "bar",
            userId: 1
        }, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer my token"
            }
        });
        */
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            data: {
                title: "Hello",
                body: "bar",
                userId: 1
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer my token"
            }   
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the functions
postData1();
postData2();
