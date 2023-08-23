const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend, writeToFile, } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');



notes.get('/', (req, res) => {
    // todo's route handlers for retrieving notes
});



notes.post('/', (req, res) => {
    // todo's route handlers for creating notes
});



notes.delete('/:id', (req, res) => {
    // todo's route handler for deleting notes
});



module.exports = notes;