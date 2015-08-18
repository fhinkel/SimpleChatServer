exports.dateischreiben = function (dateipfad, input) {
    var fs = require('fs');

    fs.writeFile(dateipfad, input, function (err) {
        if (err) {
            console.log("fehler beim schreiben");
        }
        else {
            console.log("schreiben ausgefuehrt");
        }
    });
};