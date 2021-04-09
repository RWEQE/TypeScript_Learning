/// <reference path="name_space.ts" />

namespace Shape {
  export function squre(x: number) {
    return x * x
  }
}

console.log(Shape.circle(1));
console.log(Shape.squre(1));

import circle = Shape.circle
console.log(circle(2))