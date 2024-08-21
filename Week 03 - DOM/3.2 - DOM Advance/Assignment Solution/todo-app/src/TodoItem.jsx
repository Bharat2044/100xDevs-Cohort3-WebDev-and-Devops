import { useState } from 'react';

// Component to represent each to-do item
function TodoItem({ todo, onUpdate, onDelete, onEdit }) {
    const [editText, setEditText] = useState(todo.text);
  
    const handleSave = () => {
      onUpdate(todo.id, editText);
    };
  
    return (
      <div className="todo-item">
        <input
          type="text"
          value={todo.isEditing ? editText : todo.text}
          readOnly={!todo.isEditing}
          onChange={(e) => setEditText(e.target.value)}
          onFocus={(e) => e.target.style.outline = '1px solid #007BFF'}
          onBlur={(e) => e.target.style.outline = 'none'}
        />
        <button onClick={() => todo.isEditing ? handleSave() : onEdit(todo.id)}>
          {todo.isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    );
}

export default TodoItem;