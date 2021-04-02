// 函数的定义

// 带有具体实现
function fun1(x: number, y: number) {
  return  x + y
}

// 只是函数类型的定义，没有具体实现，调用的时候需要书写函数体
let fun2: (x: number, y: number) => number
type fun3 = (x: number, y: number) => number
interface fun4 {
  (x: number, y: number): number
}

fun1(1, 2)

function fun5(x: number, y?:number) { // 可选参数必须位于必选参数之后
  if (y) {
    return x + y;
  }
  return x
}

fun5(1)

// 必选惨谁之前的默认值不能不传，想不传就传undefined，它会去读取默认值
// 必选参数之后的默认值可以不传
function fun6(x: number, y = 1, z: number, q = 0) { 
  return x + y + z + q;
}
console.log('fun6', fun6(1, undefined, 2))

function fun7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log('fun7', fun7(1, 2, 3, 4, 5))

// 函数重载
function fun8(...rest: number[]): number;
function fun8(...rest: string[]): string;
function fun8(...rest: any[]): any{
  let first = rest[0]
  if (typeof first === 'string') { // 把最容易匹配的写在最前面
    return rest.join('')
  } else if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log('fun8--number', fun8(1, 2, 3, 4, 5, 6))
console.log('fun8--string', fun8('1', '2', '3', '4', '5', '6'))