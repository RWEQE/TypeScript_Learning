"use strict";
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
// 类实现接口必须定义 接口的所有属性，类可以增加额外属性
// 接口只能约束 类的 共有成员
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.age = 12;
        this.name = name;
    }
    Asian.prototype.eat = function () { };
    Asian.prototype.sleep = function () { };
    return Asian;
}());
var boy = {
    name: 'jack',
    eat: function () { },
    run: function () { },
    cry: function () { }
};
// 接口继承类 会继承类中 属性的结构 不会继承具体实现，而且私有成员，受保护成员 也会被抽离
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
        // private state2 = 0 // 会报错，因为 类C 不是Auto的子类，不能包含它的非公有成员
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 0;
    }
    return C;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
