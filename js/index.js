var server = require('./server');
var router = require('./router');
var requestHandlers = require('./../routes/requestHandlers');

var fs = require('fs');

loggerfilepath = __dirname + "\\file_system\\logins.json";
var Logger;


var handle = {};
handle["/admin"] = requestHandlers.admin;
handle["/favicon.ico"] = requestHandlers.favicon;

console.log('We are trying to read ' + loggerfilepath);

fs.readFile(loggerfilepath, function (err, data) {
    if (err) {
        console.log('Error reading from file: ' + err);
        Logger.counter = 0;
    } else {
        console.log('We read from file: ' + data);
        Logger = JSON.parse(data);
    }

    server.start(router.route, loggerfilepath, Logger, handle);
});
