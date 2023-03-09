// This file contains SQL code for Database interaction. The application will have the ability to Create a task, Display a List of Tasks and Delete Task. Each of these functionalities correlates with the following CRUD REST API functions: create, read and

const pool = require('./database');

// Creating new entry
const create = (description) => {
  pool.query('INSERT INTO todo(description) VALUES ($1) RETURNING *', [
    description,
  ]);
};

// Getting the list of tasks
const get = () => {
  pool.query('SELECT * FROM todo');
};

// Removing task
const remove = (id) => {
  pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
};

module.exports = {
  create,
  get,
  remove,
};
