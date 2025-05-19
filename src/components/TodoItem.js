import React from 'react';
import { FaTrash } from 'react-icons/fa';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
  {task.text}
</p>
<button onClick={() => deleteTask(task.id)} aria-label="Delete task">
  <FaTrash size={16} />
</button>
 </div>
 );
}
export default TodoItem;