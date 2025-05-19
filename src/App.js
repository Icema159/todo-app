
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { FaPlus, FaTrash, FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    console.log('log');
    
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {/* Tema perjungimo mygtukas */}
      <button onClick={toggleDarkMode} aria-label="Perjungti temą" className="theme-toggle-btn">
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      <TodoList />
    </div>
  );
}

export default App;
