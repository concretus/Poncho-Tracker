const assert = require('assert');
const sum = require('../src/sum');

describe('Sum', () => {
  it('should run the sum function', () => {
    assert.equal(5, sum(2, 3));
  });
});