var express = require('express');
var router = express.Router();
var requestHandlers = require('./requestHandlers');

/* GET admin functions  */
router.get('/', function(req, res, next) {
    console.log('Start chat');
    res.send('Start chat');
});

module.exports = router;
