var express = require('express');
var router = express.Router();


var users = {
  tj: {name: 'John', age: 23},
  nadja: {name: 'Nadja', age: 27}
}

var chat = {
  message1: {user: 'John', date: '20. August', message: 'Hello'},
  message2: {user: 'Nadja', date: '19. August', message: 'Hello all'}
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Chat Server', users:users, chat:chat });
});

module.exports = router;
