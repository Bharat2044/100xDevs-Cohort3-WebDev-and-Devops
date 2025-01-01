// Import the atomFamily and selectorFamily functions from the recoil package
import { atomFamily, selectorFamily } from "recoil";

// Import the axios package to make HTTP requests
import axios from "axios";

// Define an atom family to manage the state for individual todos
export const todosAtomFamily = atomFamily({
    // Define the key for the atom family with a unique identifier 
    key: 'todosAtomFamily',
    
    // Define the default value for the atom family
    default: selectorFamily({
        key: "todoSelectorFamily", // Unique key for the selector family

        // Define the get method to fetch the todo data from the server using the given ID
        get: (id) => async ({ get }) => {
            // Wait for 5 seconds before fetching the todo from the server
            await new Promise(r => setTimeout(r, 5000));

            // Make an HTTP GET request to fetch the todo with the given ID
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

            // Return the todo data from the response
            return res.data;
        },
    })
});
