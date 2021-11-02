import React, {useState} from 'react';

export const TodoForm = (props) => {
const [input, setInput] = useState("")

const handleChange = event => {
  setInput(event.target.value);
}

const handleSubmit = event => {
  event.preventDefault();

  // props.onSubmit({
  //   id: Math.floor(Math.random() * 10000),
  //   text: input
  // })

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
      />
      <button className="todo-button">Add</button>
    </form>
  )
}
