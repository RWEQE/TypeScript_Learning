// 兼容： X 兼容 Y:  X（目标类型）= Y（源类型）
// 结构之间兼容： 成员少的兼容成员多的
// 函数之间兼容： 参数多的兼容参数少的

let s: string = 'a'
// s = null

// 接口兼容性
// 成员少的 兼容 成员多的 X兼容Y
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let xs: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
// y可以被赋值为xs 但是xs不能被赋值为y
xs = y 
// y = xs

// 函数兼容
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
  return handler
}

// 目标函数：handler 源函数：传入的参数
// 1.参数个数 目标函数的参数个数 > 源函数的参数个数
let handler1 = (a: number) => {}
hof(handler1) // OK
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) // NO

// 可选参数 和 剩余参数
let aa = (p1: number, p2: number) => {}
let bb = (p1?: number, p2?: number) => {}
let cc = (...args: number[]) => {}
aa = bb // OK
aa = cc // OK
// bb = cc // NO
// bb = aa // NO
cc = aa
cc = bb

// 2.参数类型
let handler3 = (a: string) => {}
// hof(handler3) // NO

// 这里要看成参数 而不是 成员
// 参数多的 兼容参数少的
interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d // NO

// 3.返回值类型
// 目标函数的返回值类型 必须 与源函数的返回值类型 相同 或为子类型
// 成员少的 兼容 成员多的
let ff = () => ({name: 'Alice'})
let gg = () => ({name: 'Alice', location: 'Beijing'})
ff = gg // OK
// gg = ff // NO

function overload(a: number, b: number): number // 目标函数
function overload(a: string, b: string): string // 目标函数
function overload(a: any, b: any): any{} // 实现参数

// 枚举 兼容
// 枚举之间是不兼容的，和number类型是相互兼容的
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类兼容
// 比较类是否兼容时，静态成员和构造函数，不参与比较，如果有私有成员，就不能兼容了，除非 是继承之后的子类
class AA {
  constructor(p: number, q: number) {}
  id: number = 1
  // static names: string = ''
}
class BB {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  // static names: string = ''
}
let aaa = new AA(1, 2)
let bbb = new BB(1)
aaa = bbb
bbb = aaa
class CC extends AA {}
let ccc = new CC (1, 2)
ccc = aaa
aaa = ccc

// 泛型兼容性 当T被使用时，才会影响泛型的 兼容性
interface Empty<T> {
  value: T
}
// let obj3: Empty<number> = {}
// let obj2: Empty<string> = {}
// obj3 = obj2
// obj2 = obj3

// 定义相同，没有指定类型参数 ，那么也是可以兼容的
let log11 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log22 = <U>(x: U): U => {
  console.log('x')
  return x
}
log11 = log22

export {}