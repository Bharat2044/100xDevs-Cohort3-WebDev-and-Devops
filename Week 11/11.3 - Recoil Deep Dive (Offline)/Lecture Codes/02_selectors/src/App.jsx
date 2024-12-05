// Import the RecoilRoot, useRecoilValue hooks from the 'recoil' package
import { RecoilRoot, useRecoilValue } from "recoil";

// Import the networkAtom, jobsAtom, notificationsAtom, messagingAtom atoms and totalNotificationsSelector selector from the 'atoms' file
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationsSelector } from "./atoms";

// Import the useMemo hook from the 'react' package
import { useMemo } from "react";

// Define the App component to be rendered in the root element
function App() {
    // Return the JSX element
    return (
        // Wrap the MainApp component with the RecoilRoot to provide Recoil state management
        <RecoilRoot>
            {/* Render the MainApp component */}
            <MainApp />
        </RecoilRoot>
    );
}

// Create a MainApp Component to render the main application
function MainApp() {
    // Use the useRecoilValue hook to get the current value of the networkAtom, jobsAtom, notificationsAtom, messagingAtom atoms
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationsAtomCount = useRecoilValue(notificationsAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);

    /*
    // Calculate the total notification count by summing the networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount
    const totalNotificationsCount = useMemo(() => {
        // Return the sum of the notification counts from all the atoms using the useMemo hook
        return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount]); // Define the dependencies for the useMemo hook to recalculate the totalNotificationsCount when any of the atom values change 
    */

    // Get the total notification count using the totalNotificationsSelector selector from the Recoil state
    const titalNotificationsCount = useRecoilValue(totalNotificationsSelector);

    return (
        // Return the JSX structure for rendering the UI
        <>
            {/* Render the Home button */}
            <button>Home</button>

            {/* Render the My Network button with the count, limiting the display to "99+" if the count exceeds 99 */}
            <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>

            {/* Render the Jobs button with the job count */}
            <button>Jobs ({jobsAtomCount})</button>

            {/* Render the Messaging button with the messaging notification count */}
            <button>Messaging ({messagingAtomCount})</button>

            {/* Render the Notifications button with the notification count */}
            <button>Notifications ({notificationsAtomCount})</button>

            {/* Render the Me button with the total notification count */}
            <button>Me {titalNotificationsCount}</button>
        </>
    );
}

// Export the App component as the default export to use it in other components or files
export default App;
