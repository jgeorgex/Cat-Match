const express = require('express');

const catRouter = express.Router();

const catDatabase = [
  {
    adaptability: 5,
    affection_level: 5,
    alt_names: '',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
    child_friendly: 3,
    country_code: 'EG',
    country_codes: 'EG',
    description:
      'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    dog_friendly: 4,
    energy_level: 5,
    experimental: 0,
    grooming: 1,
    hairless: 0,
    health_issues: 2,
    hypoallergenic: 0,
    id: 'abys',
    indoor: 0,
    intelligence: 5,
    lap: 1,
    life_span: '14 - 15',
    name: 'Abyssinian',
    natural: 1,
    origin: 'Egypt',
    rare: 0,
    rex: 0,
    shedding_level: 2,
    short_legs: 0,
    social_needs: 5,
    stranger_friendly: 5,
    suppressed_tail: 0,
    temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
    vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
    vocalisation: 1,
    weight: {
      imperial: '7  -  10',
      metric: '3 - 5'
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)'
  },
  {
    adaptability: 5,
    affection_level: 4,
    alt_names: '',
    child_friendly: 4,
    country_code: 'GR',
    country_codes: 'GR',
    description:
      'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
    dog_friendly: 4,
    energy_level: 3,
    experimental: 0,
    grooming: 3,
    hairless: 0,
    health_issues: 1,
    hypoallergenic: 0,
    id: 'aege',
    indoor: 0,
    intelligence: 3,
    life_span: '9 - 12',
    name: 'Aegean',
    natural: 0,
    origin: 'Greece',
    rare: 0,
    rex: 0,
    shedding_level: 3,
    short_legs: 0,
    social_needs: 4,
    stranger_friendly: 4,
    suppressed_tail: 0,
    temperament: 'Affectionate, Social, Intelligent, Playful, Active',
    vetstreet_url: 'http://www.vetstreet.com/cats/aegean-cat',
    vocalisation: 3,
    weight: {
      imperial: '7 - 10',
      metric: '3 - 5'
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/Aegean_cat'
  },
  {
    adaptability: 5,
    affection_level: 5,
    alt_names: '',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx',
    child_friendly: 4,
    country_code: 'US',
    country_codes: 'US',
    description:
      'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.',
    dog_friendly: 5,
    energy_level: 3,
    experimental: 0,
    grooming: 1,
    hairless: 0,
    health_issues: 1,
    hypoallergenic: 0,
    id: 'abob',
    indoor: 0,
    intelligence: 5,
    lap: 1,
    life_span: '11 - 15',
    name: 'American Bobtail',
    natural: 0,
    origin: 'United States',
    rare: 0,
    rex: 0,
    shedding_level: 3,
    short_legs: 0,
    social_needs: 3,
    stranger_friendly: 3,
    suppressed_tail: 1,
    temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail',
    vetstreet_url: 'http://www.vetstreet.com/cats/american-bobtail',
    vocalisation: 3,
    weight: {
      imperial: '7 - 16',
      metric: '3 - 7'
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/American_Bobtail'
  },
  {
    adaptability: 5,
    affection_level: 5,
    alt_names: '',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanCurl.aspx',
    child_friendly: 4,
    country_code: 'US',
    country_codes: 'US',
    description:
      'Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.',
    dog_friendly: 5,
    energy_level: 3,
    experimental: 0,
    grooming: 2,
    hairless: 0,
    health_issues: 1,
    hypoallergenic: 0,
    id: 'acur',
    indoor: 0,
    intelligence: 3,
    lap: 1,
    life_span: '12 - 16',
    name: 'American Curl',
    natural: 0,
    origin: 'United States',
    rare: 0,
    rex: 0,
    shedding_level: 3,
    short_legs: 0,
    social_needs: 3,
    stranger_friendly: 3,
    suppressed_tail: 0,
    temperament:
      'Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/american-curl',
    vetstreet_url: 'http://www.vetstreet.com/cats/american-curl',
    vocalisation: 3,
    weight: {
      imperial: '5 - 10',
      metric: '2 - 5'
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/American_Curl'
  },
  {
    adaptability: 5,
    affection_level: 5,
    alt_names: 'Domestic Shorthair',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx',
    child_friendly: 4,
    country_code: 'US',
    country_codes: 'US',
    description:
      'The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.',
    dog_friendly: 5,
    energy_level: 3,
    experimental: 0,
    grooming: 1,
    hairless: 0,
    health_issues: 3,
    hypoallergenic: 0,
    id: 'asho',
    indoor: 0,
    intelligence: 3,
    lap: 1,
    life_span: '15 - 17',
    name: 'American Shorthair',
    natural: 1,
    origin: 'United States',
    rare: 0,
    rex: 0,
    shedding_level: 3,
    short_legs: 0,
    social_needs: 4,
    stranger_friendly: 3,
    suppressed_tail: 0,
    temperament: 'Active, Curious, Easy Going, Playful, Calm',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/american-shorthair',
    vetstreet_url: 'http://www.vetstreet.com/cats/american-shorthair',
    vocalisation: 3,
    weight: {
      imperial: '8 - 15',
      metric: '4 - 7'
    },
    wikipedia_url: 'https://en.wikipedia.org/wiki/American_Shorthair'
  }
];

catRouter.route('/').post((req, res) => {
  function getDogFriendlyCats() {
    const dogFriendlyList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < catDatabase.length; i++) {
      if (catDatabase[i].dog_friendly === 5) {
        dogFriendlyList.push(catDatabase[i].name);
      }
    }
    return dogFriendlyList;
  }

  function getChildFriendlyCats() {
    const childFriendlyList = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < catDatabase.length; i++) {
      if (catDatabase[i].child_friendly > 3) {
        childFriendlyList.push(catDatabase[i].name);
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
      allCatsList.push(catDatabase[i].name);
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

catRouter.route('/single').get((req, res) => {
  res.send('single route');
});

module.exports = catRouter;
