
const { assert } = require('chai');

describe('Array', function() {
  it('should return -1 when searching for the index of an element that is not contained', function() {
    const arr = [];
    assert.equal(arr.indexOf(4), -1);
  });
});
