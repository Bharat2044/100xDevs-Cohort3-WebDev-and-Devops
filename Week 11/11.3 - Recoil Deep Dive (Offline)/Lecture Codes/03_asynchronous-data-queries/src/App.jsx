// Import the RecoilRoot, useRecoilState, and useRecoilValue hooks from the recoil package
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

// Import the notifications atom and totalNotificationSelector selector from the atoms file
import { notifications, totalNotificationSelector } from "./atoms";

// Create a functional component called App to render the main application
function App() {
    // Return the JSX element for rendering the main application
    return (
        // Wrap the MainApp component with the RecoilRoot component to provide the Recoil state management context
        <RecoilRoot>
            {/* Render the MainApp component */}
            <MainApp />
        </RecoilRoot>
    );
}

// Create a functional component called MainApp to render the main application content
function MainApp() {
    // Use the useRecoilState hook to get the current value of the notifications atom and the setNetworkCount function to update the notifications atom
    const [networkCount, setNetworkCount] = useRecoilState(notifications);

    // Use the useRecoilValue hook to get the current value of the totalNotificationSelector selector
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    // Return the JSX structure for rendering the UI
    return (
        <>
            {/* Render the Home button */}
            <button>Home</button>

            {/* Render the My network button with the network count, limiting the display to "99+" if the count exceeds 99 */}
            <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>

            {/* Render the Jobs button with the job count */}
            <button>Jobs {networkCount.jobs}</button>

            {/* Render the Messaging button with the messaging count */}
            <button>Messaging ({networkCount.messaging})</button>

            {/* Render the Notifications button with the notification count */}
            <button>Notifications ({networkCount.notifications})</button>

            {/* Render the Me button with the total notification count */}
            <button>Me ({totalNotificationCount})</button>
        </>
    );
}

// Export the App component as the default export from this module to be used in the index.js file
export default App;
