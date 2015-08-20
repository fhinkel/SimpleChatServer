function writeJsonFile(filepath, input) {
    var fs = require('fs');
    var data2 = JSON.stringify(input, null, 4);
    console.log(data2);
    fs.writeFile(filepath, data2, function (err) {
        if (err) {
            console.error("Writing json chat file fails" + err);
        }
        else {
            console.log("Writing succeed");
        }
    });
}

exports.writeJsonFile = writeJsonFile;
