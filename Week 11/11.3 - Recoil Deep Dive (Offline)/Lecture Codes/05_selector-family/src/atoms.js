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
            // Make an HTTP GET request to fetch the todo with the given ID
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);

            // Return the todo data from the response
            return res.data.todo;
        },
    })
});

/*
// Define an atom family to manage the state for individual todos
export const todosAtomFamily = atomFamily({
    // Define the key for the atom family with a unique identifier 
    key: 'todosAtomFamily',
    // Define the default value for the atom family
    default: selectorFamily({
        key: "todoSelectorFamily", // Unique key for the selector family

        // Define the get method to fetch the todo data from the server using the given ID
        get: function (id) {
            // Return an async function to fetch the todo data from the server
            return async function ({ get }) {
                // Make an HTTP GET request to fetch the todo with the given ID
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);

                // Return the todo data from the response
                return res.data.todo;
            }
        },
    })
});
*/


// const todo = atom({
//     key: 'todo',
//     default: selector({
//         key: 'todoSelector',
//         get: async ({ get }) => {
//             const res = await axios.get('https://sum-server.100xdevs.com/todo');
//             return res.data.todo;
//         }
//     })
// })