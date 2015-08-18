var http = require('http');
var util = require('./util');
var express =require('node_modules/express')

http.createServer(function (req, res) {
    var answer =  util.helloWorld() + (i+1);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer);
    i++;
    console.log(i);
}).listen(1337, '127.0.0.1');

var i = 0;

console.log('Server running at http://127.0.0.1:1337/');

app.use('/favicon.ico', express.static('images/favicon.ico'));