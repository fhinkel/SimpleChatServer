//var util = require('./util');
//var file = require('./file_system/file');
//var path = require('path');
//
//var appdir = path.dirname(require.main.filename);
//var dateipfad = appdir + '\file_system\testdatei.txt';
//var counter = -1;
//
//counter = file.dateilesen(dateipfad);
//console.log("our counter is " + counter);
//console.log("datei heisst: " + dateipfad);

//    var server = http.createServer(function (req, res) {
//        var answer = util.helloWorld();
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end(answer + ' ' + counter);
//        counter = counter + 1;
//        console.log(counter);
//        if (counter % 10 == 0) {
//            file.dateischreiben(dateipfad, counter);
//        }
//
//    }).listen(1337, '127.0.0.1');
////counter = 0;
//
//console.log('Server running at http://127.0.0.1:1337/');

//file.dateilesen(dateipfad, function (counter) {
//    console.log("our counter is " + counter);
//
//    console.log("datei heisst: " + dateipfad);
//
//    var server = http.createServer(function (req, res) {
//        var answer = util.helloWorld();
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end(answer + ' ' + counter);
//        counter = counter + 1;
//        console.log(counter);
//        if (counter % 10 == 0) {
//            file.dateischreiben(dateipfad, counter);
//        }
//
//    }).listen(1337, '127.0.0.1');
////counter = 0;
//});
//console.log('Server running at http://127.0.0.1:1337/');

//server.on('close', function () {
//    file.dateischreiben(dateipfad, counter);
//});

//example function sleep
/*function sleep(milliseconds){
 var startTime = new Date().getTime();
 while(new Date().getTime()<startTime+milliseconds);
 }
 sleep(10000);
 */

//example non blocking exec
/*
 var exec = require("child_process").exec;
 exec("ping 127.0.0.1 -n 10 > nul",
 {timeout: 10000, maxBuffer: 20000 * 1024},
 function (error, stdout, stderr) {
 if (error) {
 console.log('Error executing find: ' + error);
 }
 console.log(stdout);
 console.log(stderr);
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write("Number: " + counter + "\n" + stdout + "\nEnd");
 response.end();
 });
 */