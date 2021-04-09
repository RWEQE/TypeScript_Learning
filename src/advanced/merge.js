"use strict";
// 声明合并
// 接口空间中 是可以重复的 命名空间中是不可以的
Object.defineProperty(exports, "__esModule", { value: true });
var a = {
    x: 1,
    y: 2,
    foo: function (bar) {
        return bar;
    }
};
// 函数和命名空间的合并 tips:命名空间 应该 放在后面
function Lib() { }
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
console.log(Lib.version); // output 1.0
// 类和命名空间的合并 tips:命名空间 应该 放在后面
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
(function (C) {
    C.state = 1;
})(C || (C = {}));
console.log(C.state); // output 1
// 枚举和命名空间的合并 tips:命名空间 可以 放在后面
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function mix() { }
    Color.mix = mix;
})(Color || (Color = {}));
console.log(Color); // 相当于枚举类型 增加了个 mix 函数
