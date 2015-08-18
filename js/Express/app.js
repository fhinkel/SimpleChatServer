var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(1338, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://127.0.0.1:1338', host, port);
});