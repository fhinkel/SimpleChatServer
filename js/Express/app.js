var express = require('express');
var favicon = require('serve-favicon');
var app = express();
var counterAdmin = 0;
var counterUser = 0;
var users = {}

app.get('/', function (req, res) {
    res.send('Hello..schreibe deinen Namen hinter den Slash!');
});

app.get('/admin', function (req, res) {
    res.send('Hello admin!\n admin: '+ counterAdmin++ + '\n user: ' + counterUser+' '+JSON.stringify(users));
});

app.get('/user/:id', function (req, res) {
    var username = req.params.id;
    res.send('Hello !' + username);
    users[username] = true;
    counterUser++;
});

/* dirname=aktuelles Verzeichnis
   ..=eine Ebene höher --> js
   ..= nochmal -- > SimpleChatServer
 */
var file = __dirname + '/../../Public/favicon.ico';
app.use(favicon(file));

var server = app.listen(1338, function () {
    console.log('Example app listening at http://127.0.0.1:1338');
});


//app.use(express.static('Public'));