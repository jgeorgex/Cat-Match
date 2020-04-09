const unirest = require('unirest');

function getcatsService() {
  const req = unirest('GET', 'https://api.thecatapi.com/v1/breeds');

  req.query({
    attach_breed: '0'
  });
  req.headers({
    'x-api-key': 'd4649ec1-eb14-4036-84a0-629cc0301a64'
  });
  req.end(res => {
    if (res.error) throw new Error(res.error);
    const catDatabase = res.body;
    // eslint-disable-next-line no-console
    console.log(catDatabase);
    return catDatabase;
  });
}

module.exports = getcatsService();
