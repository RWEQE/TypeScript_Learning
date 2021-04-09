// 泛型类
class Log2<T> {
  run(value: T) { // 不能使用 static修饰符，静态成员不能使用泛型
    console.log(value)
    return value
  }
}
let log1 = new Log2<number>() // 指定了 类型 那就只能传指定类型的
log1.run(1)
let log2 = new Log2() // 没有指定 随便传
log2.run('1')

interface Length {
  length: number
} 
function logs<T extends Length>(value: T): T { // 这里 T 继承了 Length 说明 给T类型一个约束，必须得有number属性
  console.log(value, value.length)
  return value
}
logs([1])
logs('123')
logs({length: 1})

