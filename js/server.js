var http = require('http');
var util = require('./util');
var fs = require('fs');

var counter;
var tempCounter = 0;
var port = process.env.PORT || 3000;
var filename = __dirname + '/../counter.txt';

fs.readFile(filename, function (err, data) {
    if (err) {
        console.log('Error reading from ' + filename + ': ' + err);
        counter = 0;
    }
    else {
        counter = parseInt(data);
    }
});

var greeting = function (req, res) {
    if (req.url != '/favicon.ico') {
        var answer = util.helloWorld();
        if (counter !== undefined) {
            console.log(req.url);
            counter = counter + 1 + tempCounter;
            tempCounter = 0;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(answer + '\nYou are user number ' + counter + '.');
            console.log('Current count: ' + counter);

            fs.writeFile(filename, counter, function (err) {
                if (err) {
                    console.log('Error writing file: ' + err);
                } else {
                    console.log('Writing to file OK.');
                }
            });
        } else {
            tempCounter = tempCounter + 1;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(answer + '\n');
        }
    }
};

var server = http.createServer(greeting).listen(port);

server.on('close', function() {
    console.log('server closing');
});

process.on('SIGTERM', function () {
    server.close(function () {
        console.log('bye bye');
        process.exit(0);
    });
});

console.log('Server running at localhost:' + port + '/');

