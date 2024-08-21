import { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

// Main App component
function App() {
  // State to store the list of to-dos
  const [todos, setTodos] = useState([]);
  
  // State to store the new to-do input value
  const [newTodo, setNewTodo] = useState('');

  // Function to handle adding a new to-do
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, isEditing: false }]);
      setNewTodo(''); // Clear the input field
    } else {
      alert('Please write something in the input field!');
    }
  };

  // Function to handle updating a to-do
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    ));
  };

  // Function to handle toggling edit mode
  const toggleEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  // Function to handle deleting a to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div id="list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
            onEdit={toggleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
