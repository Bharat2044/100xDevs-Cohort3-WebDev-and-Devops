// Import atom and selector from recoil to create a new atom and selector to be used in the application
import { atom, selector } from 'recoil';

// Create a new atom called counterAtom with a default value of 0 and export it to be used in other parts of the application
export const counterAtom = atom({
    key: "counter", // Unique ID (with respect to other atoms/selectors)
    default: 0, // Default value (aka initial value)
});

// Create a new selector called evenSelector that checks if the current count is even or not and export it to be used in other parts of the application
export const evenSelector = selector({
    key: "isEvenSelector", // Unique ID (with respect to other atoms/selectors)
    get: ({ get }) => { // get is a function that is used to get the current value of an atom or selector in the Recoil store
        // Get the current count from the counterAtom using the get function 
        const currentCount = get(counterAtom); 

        // Check if the current count is even or not by checking if the remainder of the current count divided by 2 is 0
        const isEven = currentCount % 2 === 0; 

        // Return the isEven 
        return isEven; 
    },
});