// Import atom and selector functions from recoil package
import { atom, selector } from "recoil";

// Import axios package to make HTTP requests to the server
import axios from "axios";

// Create an atom called notifications
export const notifications = atom({
    // Unique key for the atom notifications   
    key: "networkAtom",
   
    // Define the default value of the atom using a selector function
    default: selector({
        // Unique key for the selector function
        key: "networkAtomSelector",
        // Define the get function to fetch the notifications data from the server
        get: async () => {
            // Make a GET request to the server to fetch the notifications data
            const response = await axios.get("https://sum-server.100xdevs.com/notifications");
            // Return the response data as the default value of the atom
            return response.json();
        }
    })
});

// Create a selector called totalNotificationSelector to calculate the total number of notifications and export it
export const totalNotificationSelector = selector({
    // Unique key for the selector totalNotificationSelector
    key: "totalNotificationSelector",
    
    // Define the get function to calculate the total number of notifications by summing the network, jobs, messaging, and notifications properties of the notifications atom
    get: ({ get }) => {
        // Get the current value of the notifications atom
        const allNotifications = get(notifications);

        // Return the sum of the network, jobs, messaging, and notifications properties of the notifications atom
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.notifications +
            allNotifications.messaging
    }
})