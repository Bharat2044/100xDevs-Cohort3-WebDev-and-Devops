// Import the RecoilRoot, useRecoilValue, useSetRecoilState hooks from the 'recoil' package
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Import the networkAtom, jobsAtom, notificationsAtom, messagingAtom atoms from the atoms file
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from "./atoms";

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

    // Use the useRecoilState hook to get the current value and setter function of the messagingAtom atom
    // const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

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

            {/* Include the ButtonUpdator component to handle updates to messaging notifications */}
            <ButtonUpdator />
        </>
    );
}

// Create a ButtonUpdator Component
function ButtonUpdator() {
    // Use the useSetRecoilState hook to get the setter function for the messagingAtom
    const setMessagingAtomCount = useSetRecoilState(messagingAtom);

    return (
        // Render a button that updates the messagingAtom count when clicked
        <button
            onClick={() => {
                // Increment the messagingAtom count by 1
                setMessagingAtomCount((count) => count + 1);
            }}
        >
            {/* Label for the button */}
            Me
        </button>
    );
}

// Export the App component as the default export to use it in other components or files
export default App;
