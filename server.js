var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Deliver index.html with client javascript code
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


//Create server socket for client connection
io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat messages', msg);
    })

    //socket.on('disconnect', function(){  //Create disconnect, if client refreshes/exits index.html
    //    console.log('user disconnect');
    //});
});


var port = normalizePort(process.env.PORT || '3000');
http.listen(port, function(){
    console.log('listening on port ' + port);
});