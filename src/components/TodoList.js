import React, {useState} from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const editTodo = (todoId, editedTodo) => {
    if(!editedTodo.text || /^\s*$/.test(editedTodo.text)) {
      return;
    }
    setTodos(actualTodos => actualTodos.map(item => (item.id === todoId ? editedTodo : item)))

  }

  const removeTodo = id => {
    const removeArray = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArray);
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updateTodos);
  }

  return (
    <div>
      <h1>Test</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      editTodo={editTodo}
      />
    </div>
  )
}

export default TodoList;
