var statisticFile = require('../js/statisticFile');
var assert = require('assert');

describe('statisticFile test', function(){
    it('should always be green', function(){
            assert.equal(true, true);
        }
    );
    it('should read the number in the file servercountlog.log', function(next){
        var userCount = statisticFile.readPreviousNumberOfUsers(function(userCount){
            assert.equal(userCount, 7);
            next();
        });
    });
    it('should write 7 to servercountlog.log',function(next){
        statisticFile.writeNewNumberOfUsers(7, function(){
            var userCount = statisticFile.readPreviousNumberOfUsers(function(userCount){
                assert.equal(userCount, 7);
                next();
            });
        })

    });
});