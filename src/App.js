import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { task: 'Clean', state: 'todo' },
    { task: 'Wash', state: 'pending' },
    { task: 'Cook', state: 'completed' },
    { task: 'Bicycle', state: 'pending' },
  ]);
  const [newTodo, setNewTodo] = useState('');

  function onChange(e) {
    const { value } = e.target;
    setNewTodo(value);
  }

  function addNewTodo(e) {
    e.preventDefault();
    if (newTodo == null || newTodo == '') return;
    setTodos((prev) => {
      return [...prev, { task: newTodo, state: 'todo' }];
    });
    setNewTodo('');
  }

  function changeTodoState(todo) {
    setTodos((prev) => {
      return prev.map((todoItem) => {
        if (todoItem.task === todo.task) {
          return {
            ...todoItem,
            state: todo.state === 'todo' ? 'pending' : 'completed',
          };
        } else {
          return todoItem;
        }
      });
    });
  }

  return (
    <div className='App'>
      <Form
        value={newTodo}
        name='newTodo'
        onChange={onChange}
        handleClick={addNewTodo}
      />
      <Todo todos={todos} handleClick={changeTodoState} />
    </div>
  );
}

export default App;
