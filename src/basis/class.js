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
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.legs = 4; // 只读属性，不能被修改，必须初始化
        this.name = name;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.pri = function () { }; // 私有成员，只能在类内部调用，不能被实例调用，也不能被子类调用
    Dog.prototype.pro = function () { }; // 受保护成员，只能在类和子类中访问，不能在实例中访问
    Dog.food = 'bones'; // 类的 静态成员，只能通过 类名 来调用，调用子类名，也可以访问到
    return Dog;
}());
// 如果给构造函数加上私有属性 private constructor(){}
// 那么这个类 既不能被实例化，也不能被继承
// 构造函数也可以被声明为 pritected 那么他就不能被实例化，相当于 基类
console.log(Dog.prototype);
var dog = new Dog('wangwang');
console.log(dog);
// dog.pri()
// dog.pro()
console.log(Dog.food);
// console.log(dog.food)
// 继承
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        _this.color = color;
        // this.pri()
        _this.run();
        _this.pro();
        return _this;
    }
    return Husky;
}(Dog));
console.log(Husky.food);
