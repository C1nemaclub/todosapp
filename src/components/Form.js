import React from 'react';

export default function Form(props) {
  return (
    <form>
      <input
        type='text'
        name={props.name}
        value={props.value}
        placeholder='Enter new todo'
        onChange={(e) => props.onChange(e)}
      />
      <button onClick={(e) => props.handleClick(e)}>Add</button>
    </form>
  );
}
