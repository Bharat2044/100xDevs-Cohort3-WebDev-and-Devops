export function SidebarClass1() {
    return (
        <div className="flex">
            <div className="transition-all delay-1000 md:w-96 w-0 h-screen">
                Sidebar
            </div>
            <div className="bg-green-800 w-full h-screen">
                Content
            </div>
        </div>
    );
}
