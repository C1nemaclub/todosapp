import React from 'react';
import X from '../assets/x.png';

export default function Todo(props) {
  const line = {
    textDecorationLine: 'line-through',
  };

  const todoElements = props.todos
    .filter((todo) => {
      return todo.state === 'todo';
    })
    .map((todo) => {
      return (
        <li key={todo.id} onClick={() => props.handleClick(todo)}>
          <div className='task'>{todo.task}</div>
        </li>
      );
    });

  const pendingElements = props.todos
    .filter((todo) => {
      return todo.state === 'pending';
    })
    .map((todo) => {
      return (
        <li key={todo.id} onClick={() => props.handleClick(todo)}>
          <div className='task'>{todo.task}</div>
        </li>
      );
    });

  const completedElements = props.todos
    .filter((todo) => {
      return todo.state === 'completed';
    })
    .map((todo) => {
      return (
        <li key={todo.id} style={line} onClick={() => props.handleClick(todo)}>
          <div className='task task-group'>
            <p>{todo.task}</p>
            <img src={X} alt='' onClick={() => props.handleDelete(todo)} />
          </div>
        </li>
      );
    });

  return (
    <div className='todo-container'>
      <ul>
        <h2>
          Todo <span>({todoElements.length})</span>{' '}
        </h2>
        {todoElements}
      </ul>
      <ul>
        <h2>
          Pending <span>({pendingElements.length})</span>
        </h2>
        {pendingElements}
      </ul>
      <ul>
        <h2>
          Completed <span>({completedElements.length})</span>
        </h2>
        {completedElements}
      </ul>
    </div>
  );
}
