const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRouter = require('./routes/index.js');
const notesRouter = require('./routes/notes.js');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', apiRouter);
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
