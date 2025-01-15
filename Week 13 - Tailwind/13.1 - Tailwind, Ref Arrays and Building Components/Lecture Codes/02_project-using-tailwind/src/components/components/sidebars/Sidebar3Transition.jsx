
// translateX vs visibilty changes
export const Sidebar3Transition = () => {
    return <div>
        <div className="fixed top-0 left-0 w-64 bg-white h-screen transition duration-300 -translate-x-full md:translate-x-0">
            hi there
        </div>
        <div className="ml-0 md:ml-64 transition-all duration-300 dark:bg-red-200">
            hello
        </div>
    </div>
}