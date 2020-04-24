const express = require('express');

const loginRouter = express.Router();

loginRouter.route('/').get((req, res) => {
  res.send('Loginarama');
});

module.exports = loginRouter;
