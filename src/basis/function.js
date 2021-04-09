"use strict";
// 函数的定义
// 带有具体实现
function fun1(x, y) {
    return x + y;
}
// 只是函数类型的定义，没有具体实现，调用的时候需要书写函数体
var fun2;
fun1(1, 2);
function fun5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
fun5(1);
// 必选惨谁之前的默认值不能不传，想不传就传undefined，它会去读取默认值
// 必选参数之后的默认值可以不传
function fun6(x, y, z, q) {
    if (y === void 0) { y = 1; }
    if (q === void 0) { q = 0; }
    return x + y + z + q;
}
console.log('fun6', fun6(1, undefined, 2));
function fun7(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
console.log('fun7', fun7(1, 2, 3, 4, 5));
function fun8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') { // 把最容易匹配的写在最前面
        return rest.join('');
    }
    else if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log('fun8--number', fun8(1, 2, 3, 4, 5, 6));
console.log('fun8--string', fun8('1', '2', '3', '4', '5', '6'));
