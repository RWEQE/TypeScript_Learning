"use strict";
// 兼容： X 兼容 Y:  X（目标类型）= Y（源类型）
// 结构之间兼容： 成员少的兼容成员多的
// 函数之间兼容： 参数多的兼容参数少的
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var s = 'a';
var xs = { a: 1, b: 2 };
var y = { a: 1, b: 2, c: 3 };
// y可以被赋值为xs 但是xs不能被赋值为y
xs = y;
function hof(handler) {
    return handler;
}
// 目标函数：handler 源函数：传入的参数
// 1.参数个数 目标函数的参数个数 > 源函数的参数个数
var handler1 = function (a) { };
hof(handler1); // OK
var handler2 = function (a, b, c) { };
// hof(handler2) // NO
// 可选参数 和 剩余参数
var aa = function (p1, p2) { };
var bb = function (p1, p2) { };
var cc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
aa = bb; // OK
aa = cc; // OK
// bb = cc // NO
// bb = aa // NO
cc = aa;
cc = bb;
// 2.参数类型
var handler3 = function (a) { };
var p3d = function (point) { };
var p2d = function (point) { };
p3d = p2d;
// p2d = p3d // NO
// 3.返回值类型
// 目标函数的返回值类型 必须 与源函数的返回值类型 相同 或为子类型
// 成员少的 兼容 成员多的
var ff = function () { return ({ name: 'Alice' }); };
var gg = function () { return ({ name: 'Alice', location: 'Beijing' }); };
ff = gg; // OK
function overload(a, b) { } // 实现参数
// 枚举 兼容
// 枚举之间是不兼容的，和number类型是相互兼容的
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
})(Fruit || (Fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
})(Color || (Color = {}));
var fruit = 3;
var no = Fruit.Apple;
// let color: Color.Red = Fruit.Apple
// 类兼容
// 比较类是否兼容时，静态成员和构造函数，不参与比较，如果有私有成员，就不能兼容了，除非 是继承之后的子类
var AA = /** @class */ (function () {
    function AA(p, q) {
        this.id = 1;
    }
    return AA;
}());
var BB = /** @class */ (function () {
    function BB(p) {
        this.id = 2;
    }
    BB.s = 1;
    return BB;
}());
var aaa = new AA(1, 2);
var bbb = new BB(1);
aaa = bbb;
bbb = aaa;
var CC = /** @class */ (function (_super) {
    __extends(CC, _super);
    function CC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CC;
}(AA));
var ccc = new CC(1, 2);
ccc = aaa;
aaa = ccc;
// let obj3: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj3 = obj2
// obj2 = obj3
// 定义相同，没有指定类型参数 ，那么也是可以兼容的
var log11 = function (x) {
    console.log('x');
    return x;
};
var log22 = function (x) {
    console.log('x');
    return x;
};
log11 = log22;
