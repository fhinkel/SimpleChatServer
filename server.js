var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
///lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running. ANPASSEN
var url = 'mongodb://localhost:27017/local';


app.use(express.static(__dirname + '/public'));

//Deliver index.html with client javascript code
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


function mongodb_schreiben(chatentry) {
    collection.insert(chatentry, function (err, result) {
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
        io.emit('chat messages', msg);
        msg = "{'Message':'" + msg + "'}";
        console.log('message: ' + msg);
        //mongodb_schreiben(msg);
    })

    //socket.on('disconnect', function(){  //Create disconnect, if client refreshes/exits index.html
    //    console.log('user disconnect');
    //});
});
var port = process.env.PORT || '3000';
http.listen(port, function () {
    console.log('listening on port ' + port);

    /*    MongoClient.connect(url, function (err, db) {
     if (err) {
     console.log('Unable to connect to the mongoDB server. Error:', err);
     }
     else {
     var collection = db.collection('chathistory');
     }
     });*/
});