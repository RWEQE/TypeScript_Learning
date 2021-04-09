"use strict";
/// <reference path="name_space.ts" />
var Shape;
(function (Shape) {
    function squre(x) {
        return x * x;
    }
    Shape.squre = squre;
})(Shape || (Shape = {}));
console.log(Shape.circle(1));
console.log(Shape.squre(1));
var circle = Shape.circle;
console.log(circle(2));
