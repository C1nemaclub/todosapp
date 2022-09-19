import React from 'react';

export default function Todo(props) {
  const line = {
    textDecorationLine: 'line-through',
  };

  const todoElements = props.todos.map((todo) => {
    return todo.state === 'todo' ? (
      <li onClick={() => props.handleClick(todo)}>{todo.task}</li>
    ) : null;
  });
  const pendingElements = props.todos.map((todo) => {
    return todo.state === 'pending' ? (
      <li onClick={() => props.handleClick(todo)}>{todo.task}</li>
    ) : null;
  });
  const completedElements = props.todos.map((todo) => {
    return todo.state === 'completed' ? (
      <li style={line} onClick={() => props.handleClick(todo)}>
        {todo.task}
      </li>
    ) : null;
  });

  return (
    <div className='todo-container'>
      <ul>
        <h2>Todo</h2>
        {todoElements}
      </ul>
      <ul>
        <h2>Pending</h2>
        {pendingElements}
      </ul>
      <ul>
        <h2>Completed</h2>
        {completedElements}
      </ul>
    </div>
  );
}
