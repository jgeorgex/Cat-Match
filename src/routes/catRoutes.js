const express = require('express');

const catRouter = express();

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

function catSelector(selection) {
  if (selection === 'yes') {
    return 'American Bobtail';
  }
  return 'All the cats';
}

catRouter.post('/shortlist', urlencodedParser, (req, res) => {
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

module.exports = catRouter;
