// Import atom from recoil package to create a new atom
import { atom } from 'recoil';

// Create a new atom called counterAtom with a default value of 0 and export it to be used in other parts of the application
export const counterAtom = atom({
    key: "counter", // Unique ID (with respect to other atoms/selectors)
    default: 0, // Default value (aka initial value)
});
