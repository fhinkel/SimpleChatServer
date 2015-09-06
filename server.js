var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var user;
var chat;
var userUndchat;
app.use(express.static(__dirname + '/public'));

var alleOnlineUser;


//Deliver index.html with client javascript code
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Create server socket for client connection
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat message', function (msg) {
        io.emit('chat messages', msg);
        //msg enthält user : chat


       userUndchat = msg.split(":");
        user = userUndchat[0];
        chat = userUndchat[1];





        console.log('user: ' + user );
        console.log('chat: ' + chat );
    });
});

var port = process.env.PORT || '3000';
http.listen(port, function () {
    console.log('listening on port ' + port);
});