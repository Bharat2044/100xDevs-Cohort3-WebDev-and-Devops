function FlexExample() {
  return (
    <div>
        <h2 className="mt-4 text-[30px] font-bold">Flexbox Example using Tailwind</h2>

        <div className="flex justify-center gap-2">
            <div className="bg-red-200 p-3">Child 1</div>
            <div className="bg-green-200 p-3">Child 2</div>
            <div className="bg-yellow-200 p-3">Child 3</div>
        </div>
    </div>
  )
}

export default FlexExample;