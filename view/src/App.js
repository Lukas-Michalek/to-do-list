import React, { useState, useEffect } from 'react';
import './App.css';
import { getTodos, createTodo, removeTodo } from './util';

const App = () => {
  const [todo, setTodo] = useState({
    description: '',
  });
  const [todoList, setTodoList] = useState();
  const [error, setError] = useState();

  // Create a fetchTodos() function to update the View from Model using getTodos() function from Controller
  // function fetchTodos() uses the getTodos() function from util/index.js to GET the existing list of to-do items. The function should set the state of todoList to the data received as the response of the GET request.

  // update view from model w/ controller
  const fetchTodos = async () => {
    const res = await getTodos();

    if (res.error) {
      setError(res.error.name);
    }

    setTodoList(res.data);
  };

  // Create a handleDelete() function to remove to-do list with matching id
  // async function handleDelete that takes in id as its argument to handle the deleting of tasks. This function calls the removeTodo() function that we defined in util/index.js as well as handle any errors. We will also call the fetchTodos() function to reflect changes to the View.

  // send user action to controller
  const handleDelete = async (id) => {
    try {
      await removeTodo(id);
      fetchTodos();
    } catch (err) {
      setError(err);
    }
  };

  // Create a handleSubmit() async function to add new to-do list
  // async function handleSubmit uses the createTodo() function from util/index.js to POST the to-do item. The function also sets todo and todoList states to reflect changes to the front-end by calling the fetchTodos() function.

  // send user action to controller
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();

    const data = new FormData(e.currentTraget);

    try {
      data.set('description', todo.description);
      data.set('created_at', `${new Date().toISOString()}`);

      const newTodo = await createTodo(data);

      if (newTodo.error) {
        setError(newTodo.error);
      }

      setTodo({ description: '' });
      fetchTodos();
    } catch (err) {
      setError(err);
    }
  };

  // * Date().toISOString => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

  // const event = new Date('05 October 2011 14:48 UTC');
  // console.log(event.toString());
  // Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"

  // console.log(event.toISOString());
  // Expected output: "2011-10-05T14:48:00.000Z"

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={todo.description}
          onChange={(event) =>
            setTodo({ ...todo, description: event.target.value })
          }
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ol>
        {todoList?.map((todoItem) => (
          <li
            key={todoItem.todo_id}
            onClick={() => {
              handleDelete(todoItem.todo_id);
            }}
          >
            {todoItem.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
