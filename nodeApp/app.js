const express = require('express');
const app = express();
const port = 3000;

// Import the path module
var path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/contacts.json', function(req, res) {
    res.sendFile(__dirname + '/public/contacts.json');
});

app.get('/contacts.js', function(req, res) {
  res.sendFile(__dirname + '/public/contacts.js');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
