const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 86400000
}));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

module.exports = app;
