// Provides communication between Model and Controller directories by adding routes

const express = require('express');

const router = express.Router();

const { create, read, removeTodo } = require('../controller');

// Next, we will create routes for POST, GET, and DELETE.
// The POST route will handle requests from '/todo/create'
// The GET will handle route from '/todos'
// The DELETE route will handle from '/todo/:id'

// Create POST route to create an todo
router.post('/todo/create', create);

// Create GET route to read an todo
router.get('/todos', read);

// Create DELETE route to remove an todo
router.delete('/todo/:id', removeTodo);

module.exports = router;
