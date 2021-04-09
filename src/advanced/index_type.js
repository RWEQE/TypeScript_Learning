"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    a: 1,
    b: 2,
    c: 3,
};
function getValue(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(getValue(obj, ['a', 'b']));
var key;
// 索引访问操作符
// T[K]
var value = 1;
