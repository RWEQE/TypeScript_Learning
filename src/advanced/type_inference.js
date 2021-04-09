"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 类型推断： 从右往左推
var a = 1;
var b = [1, null];
var c = function (x) {
    if (x === void 0) { x = 1; }
    return x + 1;
};
// 类型推断： 从左往右推
window.onkeydown = function (event) {
    console.log(event);
};
var foo = {}; // 这里的 as 语法 就是类型断言
// foo.bar = 1
var foo2 = {
    bar: 1
};
