var requestHandlers = require('./../routes/requestHandlers');

function route(pathname, handle, filepath, Logger, response) {

    if (typeof handle[pathname] == 'function') {
        return handle[pathname](filepath, Logger, response);
    }
    else {
        return requestHandlers.everythingelse(pathname, filepath, Logger, response);
    }
}

exports.route = route;