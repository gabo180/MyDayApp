import React, { useState } from 'react';
import TodoForm from './TodoForm'
import { BsTrash } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';

const Todo = ({todos, completeTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <BsTrash />
        <MdOutlineEdit />
      </div>
    </div>
  ))

}

export default Todo;
