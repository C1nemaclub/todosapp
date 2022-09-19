import './App.css';
import Todo from './components/Todo';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([
    'Todo1',
    'Todo2',
    'Todo3',
    'Todo4',
    'Todo5',
  ]);

  return (
    <div className='App'>
      <Todo todos={todos} />
    </div>
  );
}

export default App;
