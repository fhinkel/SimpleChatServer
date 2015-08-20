function readJsonChatFile(filepath, Chat) {
    var fs = require('fs');
    fs.readFile(filepath,function (err, data) {
        if (err) {
            console.error("Reading json file fails " + err);
        } else {
            console.log("Reading succeed");
            Chat = JSON.parse(data);
        }} );
    }

exports.readJsonFile = readJsonFile;

