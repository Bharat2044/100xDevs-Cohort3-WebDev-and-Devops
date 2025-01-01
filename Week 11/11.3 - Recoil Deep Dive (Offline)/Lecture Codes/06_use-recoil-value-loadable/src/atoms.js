// Import the atomFamily and selectorFamily functions from the recoil package
import { atomFamily, selectorFamily } from "recoil";

// Import the axios package to make HTTP requests
import axios from "axios";

// Define an atom family to manage the state for individual todos fetched from the server and expose it for use in other components
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily', // Unique ID (with respect to other atoms/selectors)

    // Define a function that returns the initial value for the atom 
    default: selectorFamily({
        key: "todoSelectorFamily", // Unique ID (with respect to other atoms/selectors)

        // Define a function that returns the initial value for the atom 
        get: (id) => async ({ get }) => {
            // Wait for 5 seconds before fetching the todo from the server
            await new Promise(r => setTimeout(r, 5000));

            // Fetch the todo with the given id from the server using the axios 
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);

            // Return the todo fetched from the server
            return res.data.todo;
        },
    })
});