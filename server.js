const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/404.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/503.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '503.html'));
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3011, () => console.log('Listening on port 3011'));
