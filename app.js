const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello from my Cat Match app');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
