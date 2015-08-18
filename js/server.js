var http = require('http');
var util = require('./util');
var fs = require('fs');


http.createServer(function (req, res) {

    if (req.url === '/favicon.ico') {
        var img = fs.readFileSync('../images/favicon.ico');   //read file from local directory
        res.writeHead(200, {'Content-Type': 'image/x-icon'}); //write header file
        res.end(img, 'binary');  //send image as response
    }

    var answer =  util.helloWorld();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer);

}).listen(1337, '127.0.0.1');


console.log('Server with favicon running at http://127.0.0.1:1337/');
