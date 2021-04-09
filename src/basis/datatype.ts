// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// str = 123 
// 会报错

// 数组类型
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
// 联合类型
let arr3: Array<number | string> = [1, 2, 3, '4']

// 元祖 一种特殊的数组 限定数组的类型和个数
let tuple: [number, string] = [1, '2']
tuple.push(2)
console.log(tuple)
// tuple[2] 元祖可以使用push，但是不能越界访问

// 函数
// 需要类型注解
let add = (x: number, y: number) => x + y
let add2 = (x: number, y: number): number => x + y //返回值类型可以省略
// 定义函数类型 但没有实现
let compute: (x:number, y:number) => number
// 实现
compute = (a, b) => a + b;

// 对象
let obj: object = {x: 1, y: 2}
// obj.x = 3 // 这样不能修改

let obj1: {x: number, y: number} = {x: 1, y: 2}
obj1.x = 3 // 可以修改

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // 返回false

// undefined null
let un: undefined = undefined
// let un1: undefined = 1 //报错
let nu: null = null
num = undefined //undefined 和 null 是所有类型的子类 在tsconfig.json-strictNullChecks中控制 /或者使用联合类型
num = null

// void
// void类型表示没有任何返回值的类型 返回的值一定是undefined
let noReturn = () => {}

// any
// 不指定类型 就是 any类型 随意赋值， 和js相同, 实现了对JS的兼容
let x
x = 1
x = []
x = {}

// never
// never表示 永远不会有返回值的类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}