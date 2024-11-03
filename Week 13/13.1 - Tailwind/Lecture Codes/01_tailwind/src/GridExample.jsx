function GridExample() {
    return (
      <div>
          <h2 className="mt-4 text-[30px] font-bold">Grid Example using Tailwind</h2>
  
          <div className="grid grid-cols-12">
              <div className="bg-blue-600 col-span-4 p-2">Child 1</div>
              <div className="bg-red-600 col-span-6 p-2">Child 2</div>
              <div className="bg-yellow-600 col-span-2 p-2">Child 3</div>
          </div>
      </div>
    )
  }
  
  export default GridExample;