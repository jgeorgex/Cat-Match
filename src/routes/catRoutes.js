/* eslint-disable arrow-parens */
const express = require('express');

const catRouter = express.Router();

const unirest = require('unirest');

const req = unirest('GET', 'https://api.thecatapi.com/v1/breeds');

require('dotenv').config();

const apikey = process.env.APIKEY;

req.query({
  attach_breed: '0'
});
req.headers({
  'x-api-key': apikey
});
// eslint-disable-next-line no-shadow
req.end(res => {
  if (res.error) throw new Error(res.error);
  const catDatabase = res.body;
  // eslint-disable-next-line no-console
  console.log(catDatabase);

  catRouter.route('/').post((req, res) => {
    function getDogFriendlyCats() {
      const dogFriendlyList = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < catDatabase.length; i++) {
        if (catDatabase[i].dog_friendly === 5) {
          dogFriendlyList.push(` ${catDatabase[i].name}`);
        }
      }
      return dogFriendlyList;
    }

    function getChildFriendlyCats() {
      const childFriendlyList = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < catDatabase.length; i++) {
        if (catDatabase[i].child_friendly > 3) {
          childFriendlyList.push(` ${catDatabase[i].name}`);
        }
      }
      return childFriendlyList;
    }

    function combinedList(dogFriendlyCats, childFriendlyCats) {
      const catCombo = childFriendlyCats;
      return catCombo;
    }

    function getAllCats() {
      const allCatsList = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < catDatabase.length; i++) {
        allCatsList.push(` ${catDatabase[i].name}`);
      }
      return allCatsList;
    }

    const childFriendlyCats = getChildFriendlyCats();
    const dogFriendlyCats = getDogFriendlyCats();
    const allCats = getAllCats();

    function catSelector(dogFriendlySelection, childFriendlySelection) {
      if (dogFriendlySelection === 'yes' && childFriendlySelection === 'no') {
        return dogFriendlyCats;
      }
      if (dogFriendlySelection === 'no' && childFriendlySelection === 'yes') {
        return childFriendlyCats;
      }
      if (dogFriendlySelection === 'yes' && childFriendlySelection === 'yes') {
        const comboList = combinedList(childFriendlyCats, dogFriendlyCats);
        return comboList;
      }
      return allCats;
    }

    const dogFriendlyChoice = req.body['dog-friendly'];
    const childFriendlyChoice = req.body['child-friendly'];

    const selectedCat = catSelector(dogFriendlyChoice, childFriendlyChoice);

    res.render('shortlist', {
      nav: [
        { link: '/login', title: 'LogIn' },
        { link: '/SignUp', title: 'Sign Up' }
      ],
      title: 'Cat Match',
      selectedCat
    });
  });
});

catRouter.route('/single').get((req, res) => {
  res.send('single route');
});

module.exports = catRouter;
