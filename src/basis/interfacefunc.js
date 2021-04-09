"use strict";
// 函数类型接口
// 三种方式
var adaa;
// 具体实现
var abc = function (x, y) { return x + y; };
function getLib() {
    var lib = (function () { });
    lib.version = '1.0';
    lib.doSomething = function () { console.log('lib'); };
    return lib;
}
var lib1 = getLib();
lib1();
lib1.doSomething();
var lib2 = getLib();
