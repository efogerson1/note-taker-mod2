const express = require('express');

// Import files containing our routes
const notesRouter = require('./notes');


// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/notes', notesRouter);


module.exports = app;