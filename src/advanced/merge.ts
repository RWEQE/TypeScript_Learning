// 声明合并
// 接口空间中 是可以重复的 命名空间中是不可以的

interface A {
  x: number;
  // y: string
  foo(bar: number): number; // 5
  foo(bar: 'a'): number; // 2
}
interface A {
  y: number;
  foo(bar: string): string; // 3
  foo(bar: number[]): number[]; // 4
  foo(bar: 'b'): number; // 1
}

let a: A = {
  x: 1,
  y: 2,
  foo(bar: any) {
    return bar
  }
}

// 函数和命名空间的合并 tips:命名空间 应该 放在后面
function Lib() {}
namespace Lib {
  export let version = '1.0'
}
console.log(Lib.version) // output 1.0

// 类和命名空间的合并 tips:命名空间 应该 放在后面
class C {}
namespace C {
  export let state = 1
}
console.log(C.state) // output 1

// 枚举和命名空间的合并 tips:命名空间 可以 放在后面
enum Color {
  Red,
  Yellow,
  Blue
}

namespace Color {
  export function mix() {}
}

console.log(Color) // 相当于枚举类型 增加了个 mix 函数

export {}