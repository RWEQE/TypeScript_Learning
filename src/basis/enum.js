"use strict";
// 数字枚举
// 可以进行反向映射
var Role;
(function (Role) {
    Role[Role["Reporter"] = 0] = "Reporter";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Maintainer"] = 2] = "Maintainer";
    Role[Role["Owner"] = 3] = "Owner";
    Role[Role["Guest"] = 4] = "Guest";
})(Role || (Role = {}));
console.log(Role.Reporter); // 0
console.log(Role[0]); // 0
console.log(Role);
// 字符串枚举
// 不可以进行反向映射
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
console.log(Message);
// 异构枚举
// 将数字枚举和字符串枚举混用，容易引起混淆，不建议使用
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
// 枚举成员
// Role.Reporter = 1 // error 不可以更改
var Char;
(function (Char) {
    // const 常量枚举成员，编译的时候会进行计算
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 2] = "c";
    // computed 需要计算的枚举成员，在运行时环境才会计算
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
    Char[Char["f"] = 1] = "f";
})(Char || (Char = {}));
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
console.log('month', month);
// 枚举类型
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 1] = "a";
    F[F["b"] = 2] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
// e === f // 不可以进行比较，类型不同
var e1 = 1;
var e2;
var e3 = 1;
// e1可以和e3比较，不可以和e2比较
e1 === e3;
var g1 = G.b;
var g2 = G.a;
