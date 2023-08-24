const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRouter = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
