const express = require('express');

const catRouter = express.Router();

catRouter.route('/').post((req, res) => {
  function catSelector(selection) {
    if (selection === 'yes') {
      return 'American Bobtail';
    }
    return 'All the cats';
  }

  const dogFriendly = req.body['dog-friendly'];
  const selectedCat = catSelector(dogFriendly);
  res.render('shortlist', {
    nav: [
      { link: '/login', title: 'LogIn' },
      { link: '/SignUp', title: 'Sign Up' }
    ],
    title: 'Cat Match',
    selectedCat
  });
});

catRouter.route('/single').get((req, res) => {
  res.send('hello single cat');
});

module.exports = catRouter;
