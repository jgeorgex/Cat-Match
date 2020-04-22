/* eslint-disable no-console */
const express = require('express');

const authRouter = express.Router();

function router() {
  authRouter.route('/signup').post((req, res) => {
    console.log(req.body);
    req.login(req.body, () => {
      res.redirect('/auth/profile');
    });
  });
  // eslint-disable-next-line no-shadow
  authRouter.route('/profile').get((req, res) => {
    console.log(req.user);
    res.json(req.user);
  });
  return authRouter;
}

module.exports = router();
