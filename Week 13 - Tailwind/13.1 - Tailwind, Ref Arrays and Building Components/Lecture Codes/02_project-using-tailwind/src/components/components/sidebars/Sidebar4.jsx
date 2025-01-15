import { useState } from "react"

export const Sidebar4 = () => {
    const [open, setOpen] = useState(true);

    return <div>
        <div className="flex">
            <div className={`${open ? "w-72" : "w-16"} h-screen transition-all duration-300`}>
                <div className={`h-full bg-gray-50 ${open ? "p-4" : "p-2"}`}>
                    <button onClick={() => {
                        setOpen(e => !e)
                    }} className="">
                        Close
                    </button>
                    {   open && <div className="flex items-start justify-between">
                        <div className="bg-blue-500 rounded-md p-2 text-sm flex ">
                            <div className="text-white">Webinar</div><div className="text-green-400">.gg</div>
                        </div>
                        <div>
                            <img src={"/logo.png"} className="w-10 h-10 rounded"></img>
                        </div>
                    </div>}
                    <div>
                    <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                        <ListItem size={open ? "lg" : "sm"} title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-8 w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        }/>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    hi there
                </div>
            </div>
        </div>

    </div>
}

function ListItem({title, icon, size}) {
    if (size === "sm") {
        return <div className="hover:bg-slate-200 flex justify-between cursor-pointer rounded-xl text-blue-500 p-2 my-4">
            <div>
                {icon}
            </div>
        </div>
    }
    return <div className="hover:bg-slate-200 flex justify-between p-4 m-4 cursor-pointer rounded-xl text-blue-500 ">
        <div>
            {title}
        </div>
        <div>
            {icon}
        </div>
    </div>
}