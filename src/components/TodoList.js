import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [footer, setFooter] = useState("");

  useEffect(() => {
		if (todos.length === 0) {
			setFooter("Items added, add to do.");
		} else if (todos.length === 1) {
			setFooter("Item Left.");
		} else {
			setFooter("Items Left.");
		}
	}, [todos.length]);

  // //URL as a Variable
  // const apiURL = "https://assets.breatheco.de/apis/fake/todos/user/gabo180";
  //
  // useEffect(() => {
  //   fetchTodo();
  // }, []);
  //
  // useEffect(() => {
  //   updateTodo();
  // },[todos])
  //
  // const fetchTodo = () => {
	// 	fetch(apiURL)
	// 		.then(response => {
	// 			if (response.status >= 200 && response.status < 300) {
	// 				return response.json();
	// 			} else {
	// 				alert(
	// 					`Something went wrong, this is the error ${response.status}`
	// 				);
	// 			}
	// 		})
	// 		.then(data => {
	// 			console.log(data);
	// 			setTodos(data);
	// 		})
	// 		.catch(error => console.log("This is an error: ", error));
	// };
  //
  // const updateTodo = () => {
	// 	fetch(apiURL, {
	// 		method: "PUT",
	// 		body: JSON.stringify(todos),
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		}
	// 	})
	// 		.then(resp => {
	// 			console.log(resp.ok); // will be true if the response is successfull
	// 			console.log(resp.status); // the status code = 200 or code = 400 etc.
	// 			console.log(resp.text()); // will try return the exact result as string
	// 			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
	// 		})
	// 		.then(data => {
	// 			//here is were your code should start after the fetch finishes
	// 			console.log(data); //this will print on the console the exact object received from the server
	// 		})
	// 		.catch(error => {
	// 			//error handling
	// 			console.log(error);
	// 		});
	// };

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
      <h1>Todo App ({todos.length} {footer})</h1>
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
