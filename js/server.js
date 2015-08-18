var http = require('http');
var util = require('./util');
var file = require('.file_system.file');
var counter=0;

http.createServer(function (req, res) {
    var answer =  util.helloWorld();

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer+' '+counter);
    counter = counter + 1;
    console.log(counter);


}).listen(1337, '127.0.0.1' );
//counter = 0;
console.log('Server running at http://127.0.0.1:1337/');

