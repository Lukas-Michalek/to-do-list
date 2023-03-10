// index.js will house our functions

// formidable package will be used to parse our PostgreSQL data
// A Node.js module for parsing form data, especially file uploads.
// https://www.npmjs.com/package/formidable
const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');

// Now, we’ll create an exported middleware function called create for adding tasks to the todo database that receives REST API request and response data. The function should receive req and res as its arguments and should use formidable to parse the received form data to check to see if the description field is received.
// If description is received, use the imported create function to add a new entry to the todo database. If the description field does not exist, return an error.

exports.create = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    const { description } = fields;

    // check to see if the description field exists in the form
    // if description doesn't exist, send error
    if (!fields.description) {
      return res.status(400).json({ error: 'Description is required!' });
    }
    // if description exists, add to database using create() function
    try {
      const newTask = await create(description);
      return res.status(201).send({ data: newTask.rows[0] });
    } catch (error) {
      // if description cannot be added to database, send error
      return res.status(400).json({ error });
    }
  });
};

// ** options.keepExtensions {boolean} - default false; to include the extensions of the original files or not

// Exported Async Read function for fetching all existing items in the todo database. The function should take req and res as its arguments and use the get() function to return all rows of the table as response.
// we will want to return the rows of the todo table in JSON format.

exports.read = async (req, res) => {
  try {
    const task = await get();
    return res.json({ data: task.rows });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// create an exported async function called removeTodo for deleting a task from the todo database. The function will take req and res as its arguments and use the remove() function that we created in model/todo.js to match and delete the row with the received id.

exports.removeTodo = async (req, res) => {
  const id = Number(req.params.id);
  try {
    await remove(id);
    return res.status(200).send({ data: id });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
