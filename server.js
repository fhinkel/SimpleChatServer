var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
///lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/local');


app.use(express.static(__dirname + '/public'));

//Deliver index.html with client javascript code
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get('/history', function (req, res) {
    var collection = db.get('chathistory');

    collection.find({}, {}, function (err, result) {
        if (err) {
            console.log("Error reading from db> " + err);
        } else {
            console.log('reading from db:', result);
            res.send(result);
        }
    });
});

function mongodb_schreiben(chatentry) {
    var collection = db.get('chathistory');

    console.log("insert: " + chatentry);
    collection.insert(chatentry, {w: 1}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('Inserted into the chat collection. The documents inserted with "_id" are:', result);
        }
    });
}

//Create server socket for client connection
io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat message', function (msg) {
        var user = msg.split(':')[0];
        var nachricht = msg.split(':')[1];
        console.log(user);
        console.log(nachricht);

        var chat = ({Message: nachricht, name: user});
        mongodb_schreiben(chat);
        io.emit('chat messages', msg);
    });


});
var port = process.env.PORT || '3000';
http.listen(port, function () {
    console.log('listening on port ' + port);

});