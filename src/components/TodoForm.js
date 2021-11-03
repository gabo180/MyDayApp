import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState("")

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
    </form>
  )
}

export default TodoForm;
