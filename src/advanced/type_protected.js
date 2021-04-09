"use strict";
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('Hello Java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('Hello JavaScript');
    };
    return JavaScript;
}());
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type, x) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    // 方法1 类型断言
    // if ((lang as Java).helloJava) {
    //   (lang as Java).helloJava()
    // } else {
    //   (lang as JavaScript).helloJavaScript()
    // }
    // 方法2 instanceof
    // if (lang instanceof Java) {
    //   lang.helloJava()
    // } else {
    //   lang.helloJavaScript()
    // }
    // 方法3 使用 in
    // if ('java' in lang) {
    //   lang.helloJava()
    // } else {
    //   lang.helloJavaScript()
    // }
    // 方法4 typeof 
    // if (typeof x === 'string') {
    //   x.length
    // } else {
    //   x.toFixed(2)
    // }
    // 方法5 类型保护函数 isJava
    if (isJava(lang)) {
        lang.helloJava();
    }
    else {
        lang.helloJavaScript();
    }
    return lang;
}
// getLanguage(Type.Strong)
