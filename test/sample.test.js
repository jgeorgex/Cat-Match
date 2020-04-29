/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('assert');

const { expect } = chai;

chai.use(chaiHttp);

describe('some tests', () => {
  it('an induividual test', () => {
    const actual = 1 + 2;
    const expected = 3;
    assert.equal(actual, expected);
  });

  it('finds perfect cat home page', done => {
    chai
      .request('http://localhost:4000')
      .get('/')
      .end((__err, response) => {
        expect(response).to.have.status(200);
        done('');
      });
  });
});
