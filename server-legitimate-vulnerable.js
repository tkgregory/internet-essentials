const express = require('express');
const path = require('path');
const nocache = require('nocache');

const app = express();
app.use(nocache());
const port = process.env.PORT || 8081;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/legitimate-site/index.html'));
    res.set('Content-Type', 'text/html');
    res.set('Cache-Control', 'no-cache');
  });


app.listen(port);
console.log('Server started at http://localhost:' + port);