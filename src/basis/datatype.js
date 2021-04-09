"use strict";
// 原始类型
var bool = true;
var num = 123;
var str = 'abc';
// str = 123 
// 会报错
// 数组类型
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 联合类型
var arr3 = [1, 2, 3, '4'];
// 元祖 一种特殊的数组 限定数组的类型和个数
var tuple = [1, '2'];
tuple.push(2);
console.log(tuple);
// tuple[2] 元祖可以使用push，但是不能越界访问
// 函数
// 需要类型注解
var add = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; }; //返回值类型可以省略
// 定义函数类型 但没有实现
var compute;
// 实现
compute = function (a, b) { return a + b; };
// 对象
var obj = { x: 1, y: 2 };
// obj.x = 3 // 这样不能修改
var obj1 = { x: 1, y: 2 };
obj1.x = 3; // 可以修改
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); // 返回false
// undefined null
var un = undefined;
// let un1: undefined = 1 //报错
var nu = null;
num = undefined; //undefined 和 null 是所有类型的子类 在tsconfig.json-strictNullChecks中控制 /或者使用联合类型
num = null;
// void
// void类型表示没有任何返回值的类型 返回的值一定是undefined
var noReturn = function () { };
// any
// 不指定类型 就是 any类型 随意赋值， 和js相同, 实现了对JS的兼容
var x;
x = 1;
x = [];
x = {};
// never
// never表示 永远不会有返回值的类型
var error = function () {
    throw new Error('error');
};
var endless = function () {
    while (true) { }
};
