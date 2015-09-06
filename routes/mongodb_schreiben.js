/**
 * Created by CCB on 21.08.2015.
 */


//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running. ANPASSEN
var url = 'mongodb://localhost:27017/my_database_name';

MongoClient.connect(url, function (err, db) {
    if (err)
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else {

    }
    var collection = db.collection('chathistory');
    var chatentry {Name:'Diana', Message:'hallo is' };


    collection.insert(chatentry, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('Inserted into the '
            chat
            ' collection. The documents inserted with "_id" are:', result
        )
            ;
        }
        //Close connection
        //hier weglassen?
        db.close();

    }