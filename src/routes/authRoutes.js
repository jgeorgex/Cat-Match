/* eslint-disable no-console */
const express = require('express');

const authRouter = express.Router();

authRouter.route('/signup').post((req, res) => {
  console.log('whats going on?');
  console.log(req.body);
});

module.exports = authRouter;
