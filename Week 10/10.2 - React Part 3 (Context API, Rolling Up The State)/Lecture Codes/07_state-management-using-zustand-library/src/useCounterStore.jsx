// Import the 'create' function from the zustand library, which is used to create a global state store
import { create } from "zustand";

// Define the 'useCounterStore' function using the 'create' function from zustand, which manages the state of the counter
const useCounterStore = create((set) => ({ // 'set' is a function used to update the state of the store 
    // Initialize 'count' with a default value of 0
    count: 0,

    // Define an 'increase' function that updates the state by incrementing the 'count' value
    // 'set' is used to update the state and 'state' refers to the current state of the store
    increase: () => set((state) => ({ count: state.count + 1 })),

    // Define a 'decrease' function that updates the state by decrementing the 'count' value
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

// Export 'useCounterStore' as the default export so it can be used in other components to access and modify the store
export default useCounterStore;
