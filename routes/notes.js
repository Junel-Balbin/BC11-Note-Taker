const express = require('express');
const app = express.Router();
const uuid = require('uuid');
const dbPath = './db/db.json';
const fs = require('fs');


// API Route for GET
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json('notes');
});


// API Route: POST
app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const newNote = req.body; 
    newNote.id = uuid.v4();
    notes.push(newNote);

    fs.writeFile(dbPath, JSON.stringify(notes), 'utf8', (err) => {
        if (err) {
            console.error('Error writing db.json:', err);
            res.status(500).json({ error: 'Failed to save note' });
        } else {
            res.json(newNote);
        }
    });
});


// API Route: DELETE
app.delete('/api/notes/:id', (req, res) => {
    const noteIdToDelete = req.params.id;
    const noteIndex = notes.findIndex(note => note.id === noteIdToDelete);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);

        fs.writeFile(dbPath, JSON.stringify(notes), 'utf8', (err) => {
            if (err) {
                console.error('Error writing db.json:', err);
                res.status(500).json({ error: 'Failed to delete note' });
            } else {
                res.json({ message: 'Note deleted' });
            }
        });
    } else {
        res.status(404).json({ error: 'Not found' });
    }

});


module.exports = app;