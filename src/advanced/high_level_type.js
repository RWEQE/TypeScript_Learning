"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
// 交叉类型 取所有类型的 并集
// 适合做 对象的混入
var pet = {
    run: function () { },
    jump: function () { }
};
// 联合类型 取所有类型的 交集 （即 ｜）
// 可以使类型 具有不确定性， 使代码具有灵活性
var a = 'a';
var ba;
var bac;
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.run = function () { };
    Dog.prototype.eat = function () { };
    return Dog;
}());
exports.Dog = Dog;
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.jump = function () { };
    Cat.prototype.eat = function () { };
    return Cat;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new Dog() : new Cat();
    pet.eat();
    // pet.run() // NO
    return pet;
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.weight;
        case "circle":
            return Math.PI * Math.pow(s.r, 2);
        default:
            return (function (e) { throw new Error(e); })(s);
    }
}
console.log(area({ kind: 'circle', r: 1 }));
