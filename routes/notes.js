const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
const { generateUniqueId } = require('../helpers/uuid');
const dbPath = './db/db.json';
const fs = require('fs');


//GET /api/notes should read the db.json file and return all saved notes as JSON.

// API Route for GET
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json('notes');
});



// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// API Route: POST
app.post('/api/notes', (req, res) => {
    const newNote = req.body; 
    newNote.id = generateUniqueId();
    notes.push(newNote);

    fs.writeFile(dbPath, JSON.stringify(notes), 'utf8', (err) => {
        if (err) {
            console.error('Error writing db.json:', err);
            res.status(500).json({ error: 'Failed to save note' });
        } else {
            res.json(newNote); // Respond with the new note
        }
    });
});



// Add a DELETE route to the application using the following guideline:
// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// API Route: DELETE
app.delete('/api/notes/:id', (req, res) => {
});

module.exports = app;