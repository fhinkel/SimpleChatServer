var express = require('express');
var router = express.Router();
var requestHandlers = require('./requestHandlers');

/* GET admin functions  */
router.get('/', function(req, res, next) {
    console.log('Start chat');
    res.send('Start chat');
});

router.get('/\*', function(req, res, next) {
    console.log('admin functions egal was');
    res.send('Hallo '+req.url.substr(1));
});

module.exports = router;
