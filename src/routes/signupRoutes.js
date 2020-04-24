const express = require('express');

const signupRouter = express.Router();

signupRouter.route('/').get((req, res) => {
  res.render('signup', {
    nav: [
      { link: '/login', title: 'LogIn' },
      { link: '/SignUp', title: 'Sign Up' }
    ],
    title: { link: '/', title: 'Cat Match' }
  });
});

module.exports = signupRouter;
