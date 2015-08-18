var http = require('http');
var filter = require('./filter');
var util = require('./util');

var url = require('url');

var counter;

http.createServer(function (req, res) {
    var answer;

    var pathname = url.parse(req.url).pathname;
    console.log('pathname: ' + pathname);

    if (filter.filterChat(pathname, '/chat')) {
        answer = pathname;
        counter = counter + 1;

    } else if (filter.filterChat(pathname, '/admin')) {
        answer = 'counter: ' + counter;
    } else {
        answer = util.helloWorld();
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer);

    console.log(counter);


}).listen(1337, '127.0.0.1');
counter = 0;
console.log('Server running at http://127.0.0.1:1337/');

