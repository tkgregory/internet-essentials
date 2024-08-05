const express = require('express');
const path = require('path');
const nocache = require('nocache');

const app = express();
app.use(nocache());
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/attacker-site/index.html'));
  });


app.listen(port);
console.log('Server started at http://localhost:' + port);