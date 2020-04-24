const express = require('express');

const loginRouter = express.Router();

loginRouter.route('/').get((req, res) => {
  res.render('login', {
    nav: [{ link: '/SignUp', title: 'Sign Up' }],
    title: { link: '/', title: 'Cat Match' }
  });
});

module.exports = loginRouter;
