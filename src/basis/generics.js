"use strict";
function log(value) {
    console.log(value);
    return value;
}
log(['1', '2', '3']);
log(['a', 'b']);
var myLog = log;
var mylog = log;
mylog(1);
