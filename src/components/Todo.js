import React, { useState } from 'react';
import TodoForm from './TodoForm'
import { BsTrash } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';

const Todo = ({todos, completeTodo, removeTodo, editTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitEdit = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <BsTrash className='remove-icon' onClick={() => removeTodo(todo.id)}/>
        <MdOutlineEdit className='edit-icon' onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </div>
    </div>
  ))

}

export default Todo;
