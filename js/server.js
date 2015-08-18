var http = require('http');
var util = require('./util');
var counter = 0;
var lastUrl = '';

http.createServer(function (req, res) {
    var answer =  util.helloWorld();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    switch(req.url)
    {
    	lastUrl = req.url;
    }
    counter++;
    console.log('Counter: ' + counter);
    res.end(answer);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

