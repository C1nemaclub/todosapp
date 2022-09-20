import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function onChange(e) {
    const { value } = e.target;
    setNewTodo(value);
  }

  function addNewTodo(e) {
    e.preventDefault();
    if (newTodo == null || newTodo === '') return;
    setTodos((prev) => {
      return [
        ...prev,
        { task: newTodo, state: 'todo', id: uuid(), marked: false },
      ];
    });
    setNewTodo('');
  }

  function changeTodoState(todo) {
    setTodos((prev) => {
      return prev.map((todoItem) => {
        if (todoItem.id === todo.id) {
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

  function deleteTodo(todo) {
    setTodos((prev) => {
      return prev.filter((todoItem) => {
        return todoItem.id !== todo.id;
      });
    });
  }

  return (
    <AppContainer>
      <Form
        value={newTodo}
        name='newTodo'
        onChange={onChange}
        handleClick={addNewTodo}
      />
      <Todo
        todos={todos}
        handleClick={changeTodoState}
        handleDelete={deleteTodo}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: #dfdddd;
  position: relative;
  padding: 2rem 8rem;
  .form-container {
    margin-bottom: 2rem;
    position: relative;
    form {
      display: flex;
      gap: 1rem;
      input {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        width: 321px;
        font-size: 1.2rem;
        outline: none;
        border: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &::placeholder {
          color: #736a6a;
        }
      }
      button {
        border-radius: 5px;
        border: 0;
        background: #63b157;
        padding: 0.5rem 2rem;
        color: #fff;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
  .todo-container {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    border: 1px solid #a5a5a5;
    border-radius: 3px;
    position: relative;
    @media screen and (max-width: 850px) {
      flex-direction: column;
    }
    ul {
      h2 {
        color: #00a3ff;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        span {
          color: gray;
          font-weight: normal;
        }
      }
      li {
        font-size: 1.2rem;
        color: #4a4a4a;
        margin-bottom: 10px;
        list-style: none;
        &:hover {
          cursor: pointer;
          color: dodgerblue;
          .task-group {
            img {
              opacity: 1;
            }
          }
        }
        .task-group {
          display: flex;
          justify-content: space-between;
          img {
            width: 25px;
            height: 25px;
            opacity: 1;
          }
        }
      }
    }
  }
`;
