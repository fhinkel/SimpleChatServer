var http = require('http');
var url = require('url');

function start(route, filepath, Logger, handle) {

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request received. \n URL is " + pathname);

        route(pathname, handle, filepath, Logger, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;



