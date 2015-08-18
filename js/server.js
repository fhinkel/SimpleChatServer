var http = require('http');
var util = require('./util');
var file = require('./file_system/file');
var counter=0;

http.createServer(function (req, res) {
    var answer =  util.helloWorld();
    var path = require('path');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(answer+' '+counter);
    counter = counter + 1;
    console.log(counter);
    var appdir= path.dirname(require.main.filename);
    var dateipfad = appdir + '/file_system/testdatei.txt';
    file.dateischreiben(dateipfad,counter);
    console.log("datei heisst: " + dateipfad);


}).listen(1337, '127.0.0.1' );
//counter = 0;
console.log('Server running at http://127.0.0.1:1337/');

