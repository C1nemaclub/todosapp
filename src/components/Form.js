import React from 'react';

export default function Form(props) {
  return (
    <div className='form-container'>
      <form>
        <input
          type='text'
          name={props.name}
          value={props.value}
          placeholder='Enter new Todo'
          onChange={(e) => props.onChange(e)}
          autoComplete='off'
        />
        <button onClick={(e) => props.handleClick(e)}>Add</button>
      </form>
    </div>
  );
}
