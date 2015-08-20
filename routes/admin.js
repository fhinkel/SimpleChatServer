var express = require('express');
var router = express.Router();

var requestHandlers = require('./requestHandlers');

/* GET admin functions  */
router.get('/', function(req, res, next) {
    console.log('admin functions');
    res.send('Admin functions');
});

router.get('/\*', function(req, res, next) {
    console.log('admin functions egal was');
    res.send('Admin functions egal was');
});

module.exports = router;
