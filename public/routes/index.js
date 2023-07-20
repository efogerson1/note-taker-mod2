const router = require('express').Router();

// Import files containing our routes
const notesRouter = require('./notes');


// Create and instance of express so we can apply the middleware and routing

router.use('/notes', notesRouter);


module.exports = router;