// Three exported functions that will perform the API calls to the Controller.

// performs a POST method to the route that we created for task creation. The function takes todo as its argument which will contain the contents of the new form from 'api/todo/create'

export const createTodo = async (todo) => {
  try {
    const response = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return response.json();
  } catch (error) {
    return { error };
  }
};

// function getTodos performs a GET request to get all the existing entries in the todo database from 'api/todos'

export const getTodos = async () => {
  try {
    const response = await fetch('api/todos');
    const data = await response.json();
    return data;
  } catch (error) {
    return { error };
  }
};

// function removeTodo performs a DELETE request. The function should take id as its argument to delete the row that matches the received id from the todo table.

export const removeTodo = async (id) => {
  try {
    await fetch(`api/todo/${id}`, {
      method: 'DELETE',
    });
    return 'Entry deleted.';
  } catch (error) {
    return { error };
  }
};
