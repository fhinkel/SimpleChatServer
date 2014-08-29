

exports.emitConnectionMessages = function(io, userlist){
    io.on('connection', function(socket){

        io.emit('broadcast', 'a user connected');

        socket.on('disconnect', function(){
            io.emit('broadcast', 'user ' + socket.username+ ' disconnected');
            userlist = deleteUsername(userlist, socket.username);
        });


        socket.on('user name', function (msg) {
            if (!socket.username) {
                name = msg;
                var index = userlist.indexOf(msg);
                var number = 0;

                while (index != -1) {
                    number++;
                    msg = name + number.toString();
                    index = userlist.indexOf(msg);
                }
                userlist.push(msg);
                socket.username = msg;
            }
        });

        socket.on('chat message', function (msg) {
            io.emit('broadcast', socket.username + ": " + msg);
        });

    });

};

var deleteUsername = function(userlist, username){
    var index = userlist.indexOf(username);
    if (index > -1) {
        userlist.splice(index, 1);
    }
    return userlist;
};