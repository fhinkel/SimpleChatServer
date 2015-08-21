var express = require('express');
var requestHandlers = require('./../routes/requestHandlers');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET home page');
  //res.sendFile(__dirname + 'public\\index.html');
  res.render('index', { title: 'Express' });
});
module.exports = router;
