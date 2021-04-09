// 类型推断： 从右往左推
let a = 1
let b = [1, null] 

let c = (x = 1) => x + 1

// 类型推断： 从左往右推
window.onkeydown = (event: KeyboardEvent) => {
  console.log(event)
}

interface Foo {
  bar: number
}
let foo = {} as Foo // 这里的 as 语法 就是类型断言
// foo.bar = 1

let foo2: Foo = {
  bar: 1
}

export {}