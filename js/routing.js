var http = require('http');
var counter = 0;
var name;
var responseMsg = "";
http.createServer(function (req, res) {
    var str = req.url;

    var pos = str.lastIndexOf("/");
    if(pos!=-1)
        name =  str.substring(pos+1);

    if (name == "favicon.ico") {
        //TODO: add favicon
        return
    }
    if (name == "") name = "guest";

    counter++;
    responseMsg = "Hallo " + name + "!";

    if (name == "admin") {
        responseMsg += " Total logged in " + counter;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(responseMsg);

    console.log(name + " logging in");

}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
