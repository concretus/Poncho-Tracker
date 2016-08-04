const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return index when number is found', function() {
      assert.equal(0, [1,2,3].indexOf(1));
    });
  });
});