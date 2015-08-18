var http = require('http');
var util = require('./util');
var counter = 0;
var port = 1337;

http.createServer(function (req, res) {
    var answer = util.helloWorld();
    counter = counter + 1;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer + '\nYou are user number ' + counter + '.');
    console.log('Current count: ' + counter);
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + port + '/');

