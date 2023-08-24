// Import required modules.
const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('./routes/notes.js');

// Create an Express app.
const app = express();

// Define the server port for Heroku & localhost:3001.
const PORT = process.env.PORT || 3001;

// Middleware to handle JSON requests.
app.use(express.json());

// Mount the 'notes' route under '/api'
app.use('/api', notes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route to the 'index' page.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Define route to the 'notes' page.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// Start the server and listen to the specified port.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
