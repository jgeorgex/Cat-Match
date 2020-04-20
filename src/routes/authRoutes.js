/* eslint-disable no-console */
const express = require('express');

const authRouter = express.Router();

function router() {
  authRouter.route('/signup').post((req, res) => {
    console.log('whats going on?');
    console.log(req.body);
    req.login(req.body, () => {
      res.redirect('/auth/profile');

      // eslint-disable-next-line no-shadow
      authRouter.route('/profile').get((req, res) => {
        // res.json(req.user);
        res.send('code yellow');
      });
    });
  });
  return authRouter;
}

module.exports = router();
