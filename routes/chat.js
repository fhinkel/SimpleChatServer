var express = require('express');
var router = express.Router();


/* GET chat history. */
router.get('/', function(req, res, next) {
    //res.render('index', htmlOutput);
    res.send('respond with a resource');

});



module.exports = router;