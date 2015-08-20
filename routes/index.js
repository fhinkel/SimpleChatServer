var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET chathistory page. */
router.get('/history', function (req, res) {
  var db = req.db;
  var collection = db.get('chathistory');
  collection.find({}, {}, function (e, docs) {
    res.render('history', {
      "history": docs
    });
  });
});

module.exports = router;
