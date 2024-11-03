function ResponsivenessExample() {
    return (
        <div>
            <h2 className="mt-4 text-[30px] font-bold">Responsiveness Example using Tailwind</h2>

            <div className="xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300 p-2">Hi</div>

            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-5 bg-orange-300 p-2">Child 1</div>
              <div className="col-span-12 sm:col-span-5 bg-red-300 p-2">Child 2</div>
              <div className="col-span-12 sm:col-span-2 bg-gray-300 p-2">Child 3</div>
          </div>
        </div>
    );
}

export default ResponsivenessExample;
