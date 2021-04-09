"use strict";
// 泛型类
var Log2 = /** @class */ (function () {
    function Log2() {
    }
    Log2.prototype.run = function (value) {
        console.log(value);
        return value;
    };
    return Log2;
}());
var log1 = new Log2(); // 指定了 类型 那就只能传指定类型的
log1.run(1);
var log2 = new Log2(); // 没有指定 随便传
log2.run('1');
function logs(value) {
    console.log(value, value.length);
    return value;
}
logs([1]);
logs('123');
logs({ length: 1 });
