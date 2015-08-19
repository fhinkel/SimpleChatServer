var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</hi>');
});

http.listen(3000, function () {
    console.log('listening on Port :3000');
});