// 数字枚举
// 可以进行反向映射
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}
console.log(Role.Reporter) // 0
console.log(Role[0]) // 0
console.log(Role)

// 字符串枚举
// 不可以进行反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
console.log(Message)

// 异构枚举
// 将数字枚举和字符串枚举混用，容易引起混淆，不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 1 // error 不可以更改
enum Char {
  // const 常量枚举成员，编译的时候会进行计算
  a,
  b = Char.a,
  c = 1 + 1,
  // computed 需要计算的枚举成员，在运行时环境才会计算
  d = Math.random(),
  e = '123'.length,
  f = 1,
}

// 常量枚举
// 在编译阶段会被移除
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log('month', month)

// 枚举类型
enum E { a, b }
enum F { a = 1, b = 2 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// e === f // 不可以进行比较，类型不同

let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
// e1可以和e3比较，不可以和e2比较
e1 === e3 

let g1: G = G.b
let g2: G.a = G.a

