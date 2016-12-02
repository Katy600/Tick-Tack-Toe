var expect    = require("chai").expect;
var board = require("../app/board");

describe('Board', function () {
  it('should hold a key with a value of undefined', function() {
    // var board = new Object();
  expect(board['A2']).to.equal(undefined)
  });
});
