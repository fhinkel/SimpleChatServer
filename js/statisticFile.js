var filesystem = require('fs');
var fileServerCountLog = "servercountlog.log";
var fileServerNameLog = "servernamelog.log";
var userName;


writeMyFile = function(fileName ,content){
    filesystem.writeFile(fileName, content, function(error) {
        if(error) {
            console.log(error);
        } else {
            //next();
        }
    });
};

exports.readPreviousNumberOfUsers = function(next){
    filesystem.readFile(fileServerCountLog, function(error,data) {
            if (!error) {
                next(data.toString());
            } else {
                if(error.errno==34)
                {
                //console.log("no readable file");
                next(0);}
                else{
                    console.log(error);
                }
            }
        }
    );
}

exports.writeNewNumberOfUsers = function(userCount, next){
    filesystem.writeFile(fileServerCountLog, userCount, function(error) {
        if(error) {
            console.log(error);
        } else {
            next();
        }
    });
};

exports.addUserNameToLog = function(userName){
    var allNames;
    filesystem.readFile(fileServerNameLog, function(error,allNames) {
        if (!error) {
            allNames += "\n " + userName;
            writeMyFile(fileServerNameLog, allNames);

        } else {
            if(error.errno==34)
            {
                //console.log("no readable file");
                writeMyFile(fileServerNameLog, userName);}
            else{
                console.log(error);
            }
        }

    });
};
