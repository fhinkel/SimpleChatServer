var http = require('http');
var counter = 0;
var name;
http.createServer(function (req, res) {
    var str = req.url;
    console.log(str);
    var pos = str.lastIndexOf("/");
    if(pos!=-1)
        name =  str.substring(pos+1);
    if(name!="favicon.ico"){
         counter++;
    }
    if(name=="admin"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Total logged in "+counter);
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hallo " + name + "!");
    }
}).listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
