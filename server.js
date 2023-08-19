const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');
const api = require('./routes/notes.js');
const app = express();

const PORT = process.env.PORT || 3001; 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



//GET /api/notes should read the db.json file and return all saved notes as JSON.

// API Route for GET
app.get('/', (req, res) => {
    res.json('');
});



// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// API Route: POST
app.post('/', (req, res) => {
    res.json('');
});



// Add a DELETE route to the application using the following guideline:
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// API Route: DELETE
app.delete('/', (req, res) => {
    res.json('');
});