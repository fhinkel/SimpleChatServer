var util = require('../js/util');
var assert = require('assert');

describe('Hello World function', function() {
    it('should always fail', function() {
<<<<<<< HEAD
        assert.equal(true, true);
=======
        assert.equal(false, false);
>>>>>>> 6e3402bde81122050aa88588c02afe3d99794544
    });

    it('should just say hello', function() {
        var answer = util.helloWorld();
        assert.equal('Hello World\n', answer);
    });
});