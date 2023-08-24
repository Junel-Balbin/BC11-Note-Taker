const express = require('express');
const app = require('./notes'); // Import the notes route

app.use('/notes', app); // Mount the notes routes under '/notes'

module.exports = app;