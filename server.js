const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/index.js');
const app = express();

const PORT = process.env.PORT || 3001; 

app.get('/', (req, res) => {
    res.send('');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
