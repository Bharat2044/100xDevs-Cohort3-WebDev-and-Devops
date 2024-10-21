// Create a function component named App that will be rendered in the root element
function App() {
    // Create an array of objects with todo items and their status (done or not done)
    const todos = [
        { title: "Get out of bed", done: true },
        { title: "Brush teeth", done: false },
        { title: "Go to the gym", done: false },
        { title: "Eat breakfast", done: true },
    ];

    // Create an array of objects with item names and ids
    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ];

    // Return the JSX that will be rendered in the browser
    return (
        // Create a div element with JSX
        <div>
            {/* Render the Todo component for each todo item in the todos array */}
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} done={todo.done} />
            ))}

            {/* Render the ItemList component with the items array */}
            <ItemList items={items} />
        </div>
    );
}

// Create a Todo component that will render the title and status of a todo item
function Todo({ title, done }) {
    // Return JSX that will be rendered
    return (
        // Create a div element with JSX
        <div>
            {/* Render the title and status of the todo item */}
            {title} - {done ? "Done" : "Not done"}
        </div>
    );
}

// Create an ItemList component that will render a list of items
const ItemList = ({ items }) => {
    // Return JSX that will be rendered
    return (
        // Create an unordered list element with JSX
        <ul>
            {/* Render a list item for each item in the items array */}
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

// Export the App component as the default export to be used in other files or components
export default App;
