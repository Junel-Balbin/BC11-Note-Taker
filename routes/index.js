const express = require('express');
const notes = require('./notes'); // Import the notes route
const app = express();

app.use('/notes', notes); // Mount the notes routes under '/notes'
