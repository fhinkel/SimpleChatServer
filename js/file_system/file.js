exports.dateischreiben=function(dateipfad, input){
    var ordner = require ('fs');
    ordner.open(dateipfad, 'w+', 0666, function(err, datei){
        if (err){
            console.log ("error beim öffnen" + err);
        }
        else {
            ordner.writeFile(path.basename(dateipfad),input,function(err2){
              if (err2){
                 console.log ("error beim schreiben" + err2);
              }
              else {
                ordner.close(datei, function (err3){
                    if (err3){
                        console.log ("error beim schließen" + err3);
                    }
                });
              }
            });
        }
    });
}