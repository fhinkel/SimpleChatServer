/**
 * Created by angela on 18-8-15.
 */
exports.filterChat = function (pathname, searchString) {
    return (pathname.indexOf(searchString) > -1);
};