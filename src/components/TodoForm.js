import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const focusInput = useRef(null)

  useEffect(() => {
    focusInput.current.focus()
  },[])

  const handleChange = event => {
    setInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput("")
  }

    return (
      <form className="todoForm" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
          <input
          type="text"
          placeholder="Edit your Todo"
          value={input}
          name="text"
          className="todoInput"
          onChange={handleChange}
          ref={focusInput}
        />
        <button className="todo-button">Edit</button>
        </>
        )
        :
        (
        <>
        <input
        type="text"
        placeholder="What's needs to be done?"
        value={input}
        name="text"
        className="todoInput"
        onChange={handleChange}
        ref={focusInput}
        />
        <button className="todo-button">Add</button>
        </>
        )}
      </form>
    )
}

export default TodoForm;
