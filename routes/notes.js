// Import required modules.
const express = require('express');
const app = express.Router();
const uuid = require('uuid');
const fs = require('fs');

// Middleware to parse JSON.
app.use(express.json());

// API Route for GET.
app.get('/notes', (req, res) => {
    // Read the JSON data from the file.
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // Respond with the JSON data
    res.json(notes);
});

// API Route: POST.
app.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // Create a new note object.
    const newNote = {
        title: req.body.title,
        text: req.body.text, 
        id: uuid.v4(), // Generate a unique ID.
    };
    notes.push(newNote); // // Add new note to the existing notes.

    // Write the updated notes back to the file.
    fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf8', (err) => {
        if (err) {
            console.error('Error writing db.json:', err);
            res.status(500).json({ error: 'Failed to save note' });
        } else {
            res.json(newNote);
        }
    });
});

// API Route: DELETE.
app.delete('/notes/:id', (req, res) => {
    // Read the existing notes from file.
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // Get the ID of the note to delete from the request parameters.
    const noteIdToDelete = req.params.id;
    // Find the index of the note with the specified ID.
    const noteIndex = notes.findIndex(note => note.id === noteIdToDelete);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1); // // Remove the note from the array.

        // Write the updated notes back to the file.
        fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf8', (err) => {
            if (err) {
                console.error('Error writing db.json:', err);
                res.status(500).json({ error: 'Failed to delete note' });
            } else {
                res.json({ message: 'Note deleted' });
            }
        });
    } else {
        // If note with the specified ID is not found, will respond with a 404 error.
        res.status(404).json({ error: 'Not found' });
    }
});

module.exports = app; // Exports the app router.
