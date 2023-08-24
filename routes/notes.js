const express = require('express');
const app = express.Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
const { generateUniqueId } = require('../helpers/uuid');
const dbPath = './db/db.json';
const fs = require('fs');


// API Route for GET
app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json('notes');
});


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


// API Route: DELETE
app.delete('/api/notes/:id', (req, res) => {
});


module.exports = app;