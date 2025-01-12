// Define a functional component named GridExample
function GridExample() {
  
    // Return the JSX that defines the component's structure
    return (
        // A container div to wrap the component content
        <div>
            {/* An h2 element for the title with Tailwind classes for margin-top, text size, and font weight */}
            <h2 className="mt-4 text-[30px] font-bold">Grid Example using Tailwind</h2>

            {/* A grid container using Tailwind's grid layout system with 12 columns */}
            <div className="grid grid-cols-12">
                {/* A child div spanning 4 columns with a blue background and padding */}
                <div className="bg-blue-600 col-span-4 p-2">Child 1</div>

                {/* A child div spanning 6 columns with a red background and padding */}
                <div className="bg-red-600 col-span-6 p-2">Child 2</div>

                {/* A child div spanning 2 columns with a yellow background and padding */}
                <div className="bg-yellow-600 col-span-2 p-2">Child 3</div>
            </div>
        </div>
    );
}

// Export the GridExample component as the default export so it can be used in other files or components
export default GridExample;
