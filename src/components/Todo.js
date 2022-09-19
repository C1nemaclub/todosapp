import React from 'react';

export default function Todo(props) {
  console.log(props);

  const todoElements = props.todos.map((todo) => {
    return <li>{todo}</li>;
  });

  return <ul>{todoElements}</ul>;
}
