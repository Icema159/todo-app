import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TodoItem from './TodoItem';
function TodoList() {
 const [tasks, setTasks] = useState([
 {
 id: 1,
 text: 'Doctor Appointment',
 completed: true
 },
 {
 id: 2,
 text: 'Meeting at School',
 completed: false
 }
 ]);
 
 const [text, setText] = useState('');
function addTask(text) {
 const newTask = {
 id: Date.now(),
 text,
 completed: false
 };
 setTasks([...tasks, newTask]);
 setText('');
 }
function deleteTask(id) {
 setTasks(tasks.filter(task => task.id !== id));
 }
function toggleCompleted(id) {
 setTasks(tasks.map(task => {
 if (task.id === id) {
 return {...task, completed: !task.completed};
 } else {
 return task;
 } 
 }));
 }
return (
 <div className="todo-list">
 {tasks.map(task => (
 <TodoItem
 key={task.id} 
 task={task}
 deleteTask={deleteTask}
 toggleCompleted={toggleCompleted} 
 />
 ))}
<div className="input-group">
  <input
    type="text"
    value={text}
    onChange={e => setText(e.target.value)}
    placeholder="Įvesk užduotį..."
  />
  <button onClick={() => addTask(text)} aria-label="Pridėti užduotį">
    <FaPlus size={20} />
  </button>
</div>
 </div>
 );
}

export default TodoList;