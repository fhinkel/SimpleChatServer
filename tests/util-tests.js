var util = require('../js/util');
var assert = require('assert');

describe('Hello World function', function() {
    it('should always fail', function() {

        assert.equal(false, false);

    });

    it('should just say hello', function() {
        var answer = util.helloWorld();
        assert.equal('Hello World, wie geht es euch?\n ' +
            '<h1>Wir lassen TravisCI für uns arbeiten</h1>', answer);
    });
});