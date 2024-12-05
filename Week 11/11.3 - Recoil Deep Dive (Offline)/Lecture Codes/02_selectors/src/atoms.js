// Import the atom and selector functions from the 'recoil' package
import { atom, selector } from 'recoil';

// Define an atom for managing the network notification count and export it
export const networkAtom = atom({
    // Unique key for identifying the atom
    key: 'networkAtom',
    // Default value for the atom
    default: 102,
});

// Define an atom for managing the job notification count and export it
export const jobsAtom = atom({
    // Unique key for identifying the atom
    key: 'jobsAtom',
    // Default value for the atom
    default: 0,
});

// Define an atom for managing the general notification count and export it
export const notificationsAtom = atom({
    // Unique key for identifying the atom
    key: 'notificationsAtom',
    // Default value for the atom
    default: 12,
});

// Define an atom for managing the messaging notification count and export it
export const messagingAtom = atom({
    // Unique key for identifying the atom
    key: 'messagingAtom',
    // Default value for the atom
    default: 0,
});

// Define a selector to calculate the total notification count and export it
export const totalNotificationsSelector = selector({
    // Unique key for identifying the selector
    key: 'totalNotificationsSelector',

    // Define the get function to calculate the total notification count
    get: ({ get }) => {
        // Get the current value of the networkAtom, jobsAtom, notificationsAtom, messagingAtom atoms
        const networkNotificationCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        // Return the sum of the notification counts from all the atoms
        return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
});