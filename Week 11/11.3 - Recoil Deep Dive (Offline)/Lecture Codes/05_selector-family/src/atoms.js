// import atomFamily function from recoil library
import { atomFamily } from "recoil";

// import TODOS from todos.js file to use in atomFamily
import { TODOS } from "./todos";

// Create atomFamily with key todosAtomFamily and default value as id 
export const todosAtomFamily = atomFamily({
    // key is the unique identifier for the atomFamily
    key: 'todosAtomFamily',
    // default is a function that returns the default value of the atomFamily with id as parameter
    default: id => {
        // return the todo object with id as parameter from TODOS array 
        return TODOS.find(x => x.id === id);
    },
});
