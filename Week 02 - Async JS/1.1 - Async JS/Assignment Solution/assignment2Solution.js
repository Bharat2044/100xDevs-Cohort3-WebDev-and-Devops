// Create promisified version of  fetch

// function to create a promisified version of fetch
function promisifiedFetch(url) {
    
  // return a promise that resolves after the fetch is complete
  return new Promise((resolve, reject) => {
    // fetch the data from the given url
    fetch(url)
      .then((data) => resolve(data)) // if the fetch is successful, resolve the promise with the data
      .catch((error) => reject(error)); // if the fetch fails, reject the promise with the error
  });
}

// call the promisifiedFetch function with the url of the data to fetch
promisifiedFetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
