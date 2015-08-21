var writer = require('./../js/writer');

function admin(filepath, Logger, response) {
    console.log("Request handler 'admin' was called");
    console.log("Logger path: " + filepath);
    console.log("Number of non admin and favicon requests :" + Logger.counter);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("There is the admin info to the chat " + Logger.chatName + "\n");
    response.write(Logger.counter + " person loggen in:\n");
    for (i = 0; i < Logger.entry.length; i++)
        response.write(Logger.entry[i] + "\n");
    response.end();

}

function everythingelse(name, filepath, Logger, response) {
    console.log("Request handler 'for other' was called");
    console.log("Logger path: " + filepath);
    if (Logger.entry.indexOf(name.substr(1)) == -1) {
        Logger.entry[Logger.counter] = name.substr(1);
        Logger.counter = Logger.counter + 1;
    }
    if (Logger.counter % 3 == 0) {
        console.log("File stored");
        writer.writeJsonFile(filepath, Logger);
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hallo " + name.substr(1) + "!");
    response.write("Number of non admin and favicon requests :" + Logger.counter);
    response.end();
}

function favicon(filepath, Logger, response) {
    console.log("Request handler 'favicon' was called");
    console.log("Logger path: " + filepath);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end();
}
exports.admin = admin;
exports.everythingelse = everythingelse;
exports.favicon = favicon;

