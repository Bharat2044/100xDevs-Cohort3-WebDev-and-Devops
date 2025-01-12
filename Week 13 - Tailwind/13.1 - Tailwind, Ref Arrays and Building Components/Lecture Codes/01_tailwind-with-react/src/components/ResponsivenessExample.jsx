// Define a functional component named ResponsivenessExample
function ResponsivenessExample() {
    
    // Return the JSX that defines the component's structure
    return (
        // A container div element to wrap the entire component content
        <div>
            {/* An h2 element for the title with Tailwind classes for margin-top, text size, and font weight */}
            <h2 className="mt-4 text-[30px] font-bold">Responsiveness Example using Tailwind</h2>

            {/* A div with responsive background colors using Tailwind's breakpoint classes and padding */}
            <div className="xl:bg-red-900 md:bg-green-900 sm:bg-blue-900 bg-black p-2 text-white">Hi</div>

            {/* A grid container using Tailwind's grid layout system with 12 columns */}
            <div className="grid grid-cols-12">
                {/* A child div spanning all 12 columns on smaller screens and 5 columns on small screens with yellow background and padding */}
                <div className="col-span-12 sm:col-span-5 bg-yellow-300 p-2">Child 2</div>

                {/* Another child div spanning all 12 columns on smaller screens and 5 columns on small screens with orange background and padding */}
                <div className="col-span-12 sm:col-span-5 bg-orange-300 p-2">Child 1</div>

                {/* A child div spanning all 12 columns on smaller screens and 2 columns on small screens with gray background and padding */}
                <div className="col-span-12 sm:col-span-2 bg-gray-300 p-2">Child 3</div>
            </div>
        </div>
    );
}

// Export the ResponsivenessExample component as the default export so it can be used in other files or components
export default ResponsivenessExample;

/*
Breakpoint prefix	Minimum width	CSS
        sm	             640px	  @media (min-width: 640px) { ... }
        md	             768px	  @media (min-width: 768px) { ... }
        lg	             1024px	  @media (min-width: 1024px) { ... }
        xl	             1280px	  @media (min-width: 1280px) { ... }
        2xl	             1536px	  @media (min-width: 1536px) { ... }
*/
