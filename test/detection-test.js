var assert = require('assert');
var detect = require('../src/detect');

describe('citation needed', function() {
  it('should detect anonymous citations', function() {
    assert.deepEqual(detect(", officials say in the"), ["officials say"]);
    assert.deepEqual(detect("said on the condition of anonymity"), ["condition of anonymity"]);
  });
});