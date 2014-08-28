const port=1337;

var statisticFile = require('./statisticFile');
var userCount;

var express = require('express');
var app=express();


function increaseRequestCountByOne() {
    userCount++;
    console.log("User:" + userCount);
}

app.get('/', function(req,res){
    res.send('<a href ="http://localhost:1337/myname">http://localhost:1337/myname</a> ')

});
app.get('/statistics', function(req,res){
    res.send("Here you can see our statistics");
});

app.get('/index.html',function(req,res) {
    res.sendfile('./public/index.html');
});

app.get('/:user', function(req,res){
    increaseRequestCountByOne();
    statisticFile.addUserNameToLog(req.param('user'));
    res.send("Hello " + req.param('user'));
});


statisticFile.readPreviousNumberOfUsers(function(number){
    userCount = number;
    console.log("we have changed user count " + userCount);
})

var server = app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});
