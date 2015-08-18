var http = require('http');
var util = require('./util');
var filter = require('./filter');

var url = require('url');

var counter;

http.createServer(function (req, res) {
    var answer = util.helloWorld();

    console.log(req.url);

    var pathname = url.parse(req.url).pathname;
    console.log('pathname: ' + pathname);

    if (pathname.indexOf('/chat') > -1) {
        console.log('++++++++++++++++ found ++++++++++++++++');
        counter = counter + 1;
    } else {
        console.log('++++++++++++++++ not found ++++++++++++++++');
        answer = 'counter: ' + counter;

    }


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer + pathname);

    console.log(counter);


}).listen(1337, '127.0.0.1');
counter = 0;
console.log('Server running at http://127.0.0.1:1337/');

