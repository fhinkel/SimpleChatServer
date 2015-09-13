var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var AlleOnlineUser =[];

app.use(express.static(__dirname + '/public'));

//Deliver index.html with client javascript code
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Create server socket for client connection
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat message', function (msg) {
        io.emit('chat messages', msg);

        UserUndChat = msg.split(" TRENNER ");
        user = userUndChat[0];
        chat = userUndChat[1];

        console.log('user: ' + user);
        console.log('chat' + chat);

        for (var usernr = 0; usernr < AlleOnlineUser.length; usernr++) {
            if (AlleOnlineUser[usernr] = user) {
                userSchonDrin = true;
            }
        }
        if (userSchonDrin = false)
        {
            AlleOnlineUser.push(user);
        }
        AlleOnlineUser.sort;
        io.emnit('Alle User ',AlleOnlineUser);

});

var port = process.env.PORT || '3000';
http.listen(port, function () {
    console.log('listening on port ' + port);
});